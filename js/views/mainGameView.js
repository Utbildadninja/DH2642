function MainGameView(props) {
    let sneaky;
    if (props.time <= 0) {
        sneaky = ""
    }
    else sneaky = "hidden";

    let reverseSneaky;
    if (props.time > 0) {
        reverseSneaky = ""
    }
    else reverseSneaky = "hidden";

    return (

        <div className="container">
            <h1>{props.time} sec</h1>

            <div id="mainGame-view-word">
                <h1 id="mainGame-view-word-text">{props.data}</h1>
            </div>
            <br/>

            <button id={reverseSneaky} className="mainGame-view-btn-skip" onClick={props.skip}>SKIP</button>
            <button id={reverseSneaky} className="mainGame-view-btn-success" onClick={props.successfulGuess}>CORRECT</button>
            <button id={reverseSneaky} disabled={!props.allowLifeline} className="btn-lifeline" onClick={() => {window.location.hash="#lifeline";}}>Lifeline</button>

            <p id={sneaky}>Make a final guess! No more talking!</p>
            <button id={sneaky} className={"mainGame-view-btn-final-incorrect"} onClick={props.showSummary}>Incorrect</button>
            <button id={sneaky} className={"mainGame-view-btn-final-correct"} onClick={props.finalSuccessfulGuess}>Correct</button>

            <h1>Score: {props.team.score}</h1>
            Team: {props.team.name}
        </div>
    )
}

// <div>{props.team.correctGuesses && props.team.correctGuesses.map(word => <div>{word}</div>)}</div>
// <div>{props.guess.map(word => <div>{word}</div>)}</div>

//TODO: Bestämma om det ska visas här eller inte

//<h2>Team: {props.team.name}</h2>
/*
            <h3>Correct words:</h3>

            <div>{props.guess.map(function (word, index) {
                return <div key = {index}>{word}</div>
            })}</div>
*/