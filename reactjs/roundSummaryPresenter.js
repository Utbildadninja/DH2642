function RoundSummaryPresenter(props){
    const [team, setTeam]=React.useState(props.model.currentTeam);
    const [guess, setGuess]=React.useState(props.model.currentTeam.correctGuesses);

    React.useEffect( function(){
        function obs(){
            setTeam(props.model.currentTeam); setGuess(props.model.currentTeam.correctGuesses);
        }
        props.model.addObserver(obs);
        return function(){ props.model.removeObserver(obs);}
    }, [props.model])

    return <RoundSummaryView
        team = {team}
        guess = {guess}
        roundFinished = {() => props.model.roundFinished()}
        removeWord = {x => props.model.removeWord(x)}
    />
}