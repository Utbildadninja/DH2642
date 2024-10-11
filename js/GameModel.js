class GameModel {
	constructor(observers = [], currentWord=null) {
		this.observers = [];
		this.currentWord = null;
		this.wordArray = [];
		this.counter = 0;
		this.currentTeam = {};
		this.useFreeAPI = true;
		this.currentRound = 1;
		this.teams = [];
		this.team = {name: "", score: 0, correctGuesses: []};
		this.currentUser = null;
		this.currentUsername = null;
		this.currentCorrectGuesses = [];
		this.temporaryCorrectGuesses = [];
		this.time = 35;
		this.totalRounds = 3;
		this.chosenTime = 30;
		this.allowLifeline = true;
		this.lastCallPremium = false;
	}

	createAccountEmail(email, password, username) {
		firebase.auth().createUserWithEmailAndPassword(email, password)
			.then((userCredential) => {
				// Signed in
				let user = userCredential.user;
				//console.log("User created")
				//console.log(user);
				this.currentUser = user;
				this.notifyObservers();
				window.location.hash="#home";
				return user.updateProfile({displayName: username})
			})
			.catch((error) => {
				let errorCode = error.code;
				let errorMessage = error.message;
				console.log(errorCode);
				console.log(errorMessage);
				alert(errorMessage);
			});
	}

	signInEmail(email, password) {
		firebase.auth().signInWithEmailAndPassword(email, password)
			.then((userCredential) => {
				// Signed in
				let user = userCredential.user;
				//console.log("User signed in")
				//console.log(user);
				this.currentUser = user;
				this.notifyObservers();
				window.location.hash="#home";
			})
			.catch((error) => {
				let errorCode = error.code;
				let errorMessage = error.message;
				console.log(errorCode);
				console.log(errorMessage);
				alert(errorMessage);
			});
	}

	signOut() {
		firebase.auth().signOut().then(() => {
			console.log("Signed out")
			this.currentUser = null;
			this.notifyObservers();
			window.location.hash="#home";
		}).catch((error) => {
			console.log(error);
		});
	}

	showCurrentUser() {
		const user = firebase.auth().currentUser;

		if (user) {
			// User is signed in, see docs for a list of available properties
			// https://firebase.google.com/docs/reference/js/firebase.User
			// ...
			console.log(user);
			console.log(firebase.auth().currentUser.uid);
		} else {
			console.log("No-one signed in")
			// No user is signed in.
		}
	}

	// Start a new game
	newGame() {
		if (this.wordArray < 1)
			this.getNewArray();
		this.currentRound = 1;
		this.setCurrentTeam(this.teams[0]);
		this.cleanup();
		this.notifyObservers();
	}

	cleanup() {
		this.teams.map(team => {
			team.score = 0;
			team.correctGuesses = [];
		})
		this.temporaryCorrectGuesses = [];
	}

	startup() {
		if (this.wordArray < 1)
			this.getNewArray();
		window.location.hash="#setup";
	}

	// Gets a new array of words from the selected API based on this.free
	getNewArray() {
		if (this.useFreeAPI === false) {
			this.getNewArrayPremium();
			this.lastCallPremium = true;
		}

		else if (this.useFreeAPI === true) {
			this.getNewArrayFree();
			this.lastCallPremium = false;
		}

		else console.log("Couldn't decide on array, NOT GOOD")
	}

	// Gets an array of words from the free API, unlimited words but mostly nonsense (great for testing)
	getNewArrayFree () {
		GameSource.searchWordsFree().then(
			result => {
				this.wordArray = result
				console.log("Free array: " + this.wordArray);
				this.notifyObservers();
			});

	}

	// Gets an array of words from the premium API (limited to 100 calls per hour)
	getNewArrayPremium () {
		let tempArray = [];
		GameSource.searchWords().then( (result) => {
			tempArray = result
			this.wordArray = tempArray.map(r => r.word)
			console.log(tempArray)
			console.log("Premium array: " + this.wordArray)
			this.notifyObservers();
		});

	}

	/*
	Sets currentWord to a new word.
	 */
	setCurrentWord() {
		if (this.counter >= this.wordArray.length) {
			this.counter = 0;
			//console.log("Counter >= wordArray.length")
		}
		else if (this.counter >= this.wordArray.length-1){
			this.getNewArray();
		}
		//console.log("Counter is: " + this.counter);
		this.currentWord = this.wordArray[this.counter];
		this.counter = this.counter + 1;
		//console.log("Current word is: " + this.currentWord)
		this.notifyObservers();
	}

	// Team made a successful guess
	successfulGuess() {
		this.addCorrectWordTemporary(this.currentWord);
		this.addCorrectWord(this.currentWord);
		this.currentTeam.score += 10;
		this.setCurrentWord();
		this.notifyObservers();
	}

	// Final guess successful
	finalSuccessfulGuess() {
		this.addCorrectWord(this.currentWord);
		this.currentTeam.score += 10;
		this.notifyObservers();
		this.showSummary();
	}

	// Team decided the word was too hard and skipped it
	skip() {
		this.setCurrentWord();
		this.notifyObservers();
	}

	// From pause view in between rounds.
	continue() {
		this.setCurrentWord();
		this.currentCorrectGuesses = this.currentTeam.correctGuesses;
		this.startTimer();
		this.notifyObservers();
		//console.log(this.currentTeam)
	}

	// A round is finished. Next team up.
	roundFinished() {
		if(this.currentRound === this.totalRounds * this.teams.length) {
			this.endGame();
			this.notifyObservers();
		}
		else {
			window.location.hash="#pause";
			//console.log("Round finished: " + this.currentRound)
			this.setCurrentTeam(this.teams[this.currentRound%this.teams.length])

			this.currentRound += 1;
			this.temporaryCorrectGuesses = [];
			this.notifyObservers();
			//console.log("Round is now: " + this.currentRound)
		}
	}

	showSummary() {
		window.location.hash="#summary";
	}

	endGame() {
		window.location.hash="#end";
		this.updateTeams();
		this.notifyObservers();
	}

	addCorrectWord(wordToAdd) {
		this.currentTeam.correctGuesses = [...this.currentTeam.correctGuesses, wordToAdd];
		//console.log(this.currentTeam.correctGuesses);
		this.currentCorrectGuesses = [...this.currentTeam.correctGuesses];
		//console.log(this.currentCorrectGuesses);
		this.notifyObservers();
	}

	addCorrectWordTemporary(wordToAdd) {
		this.temporaryCorrectGuesses = [...this.temporaryCorrectGuesses, wordToAdd];
		this.notifyObservers();
	}

	removeWord(wordToRemove) {
		this.currentTeam.correctGuesses = this.currentTeam.correctGuesses.filter(word => word !== wordToRemove);
		this.currentTeam.score -= 10;
		this.notifyObservers();
	}

	addTeam(teamName) {
		if (this.team.name === teamName)
			return

		else {
			this.team.name = teamName;
			let teamToAdd = {...this.team}

			this.teams = [...this.teams, teamToAdd];
			this.notifyObservers();
			//console.log(this.teams)
		}
	}

	// Remove team from the list for any given reason
	removeTeam(teamToRemove) {
		this.teams = this.teams.filter(team => team !== teamToRemove); // Stega igenom och filtrera
		this.notifyObservers();
	}

	// Sets the current active team
	setCurrentTeam(setTeam) {
		this.currentTeam = setTeam;
		this.notifyObservers();
	}

	updateTeams() {
		this.teams = [...this.teams];
		this.notifyObservers();
	}

	// Sets the API to the Free API or the Premium API, input true or false
	setFreeAPI(input) {
		this.useFreeAPI = input;
		console.log("Free API set to: " + this.useFreeAPI);
		if(!this.lastCallPremium) {
			this.getNewArray();
			//console.log("Got new array from settings")
		}
		this.notifyObservers();
	}

	setChosenTime(time) {
		if(time >= 0) {
			this.chosenTime = time;
			this.notifyObservers();
		}
	}

	setTotalRounds(input) {
		if(input > 0) {
			this.totalRounds = input;
			this.notifyObservers();
		}
	}

	setAllowLifeline(input) {
		this.allowLifeline = input;
		this.notifyObservers();
	}

	startTimer() {
		this.time = this.chosenTime;
		this.notifyObservers();
		this.countDown();
	}

	countDown() {

		if(this.time > 0) {
			setTimeout(() => this.countDown(), 1000)
			this.time--;
			//console.log(this.time);
			this.notifyObservers();
		}
		//else console.log("Timer 0" + this.time) // Kan inte köra funktioner, typ continue() ?!

	}

	addObserver(callback) {
		this.observers = [...this.observers, callback];
	}

	removeObserver(callback) {
		this.observers = this.observers.filter(cb => cb !== callback)
	}

	notifyObservers() {
		this.observers.forEach(cb =>
		{setTimeout(()=>{
			try{
			cb()}catch (e) {console.log(e)}},0)})
	}

}