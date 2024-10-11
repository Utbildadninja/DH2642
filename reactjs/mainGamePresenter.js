function MainGamePresenter(props){
    const [data, setData]= React.useState(props.model.currentWord);
    const [team, setTeam]=React.useState(props.model.currentTeam);
    const [guess, setGuess]=React.useState(props.model.temporaryCorrectGuesses);
    const [time, setTime]=React.useState(props.model.time);

    React.useEffect( function(){
        function obs(){
            setData(props.model.currentWord); setTeam(props.model.currentTeam); setGuess(props.model.temporaryCorrectGuesses); setTime(props.model.time);
        }
        props.model.addObserver(obs);                               // 1. subscribe
        return function(){ props.model.removeObserver(obs);}        // 2.unsubscribe
    }, [props.model])                                            //  stricter: [props.model] ! (jämfört med [])

    return <MainGameView
        data = {data}
        team = {team}
        guess = {guess}
        successfulGuess = {() => props.model.successfulGuess()}
        finalSuccessfulGuess = {() => props.model.finalSuccessfulGuess()}
        skip = {() => props.model.skip()}
        //roundFinished = {() => props.model.roundFinished()}
        showSummary = {() => props.model.showSummary()}
        countdown = {() => props.model.startTimer()}
        time = {time}
        allowLifeline = {props.model.allowLifeline}
    />
}