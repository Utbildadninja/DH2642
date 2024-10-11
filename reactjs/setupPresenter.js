function SetupPresenter(props) {
        const [teams, setTeam]=React.useState(props.model.teams);
        const [inputField, setInputField]= React.useState("");
        React.useEffect( function(){
            function obs(){ setTeam(props.model.teams); setActiveGame(props.model.activeGame)}
            props.model.addObserver(obs);                               // 1. subscribe
            return function(){ props.model.removeObserver(obs);}        // 2.unsubscribe
        }, [props.model])

        return <React.Fragment>
            <SetupView
            newGame = {() => props.model.newGame()}
            teams = {teams}
            removeTeam = {x => props.model.removeTeam(x)}
            addTeam = {() => props.model.addTeam(inputField)}
            onText = {text => setInputField(text)}
        />
    </React.Fragment>
// TODO Remove the text in the box when a team is added.
}