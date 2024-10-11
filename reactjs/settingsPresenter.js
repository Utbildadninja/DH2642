function SettingsPresenter(props) {
    const [freeAPI, setFreeAPI]=React.useState(props.model.useFreeAPI);
    const [time, setTime]=React.useState(props.model.chosenTime);
    const [rounds, setRounds]=React.useState(props.model.totalRounds);
    const [lifeline, setLifeline]=React.useState(props.model.allowLifeline);
    React.useEffect( function(){
        function obs(){setFreeAPI(props.model.useFreeAPI); setTime(props.model.chosenTime); setRounds(props.model.totalRounds); setLifeline(props.model.allowLifeline)}
        props.model.addObserver(obs);                               // 1. subscribe
        return function(){ props.model.removeObserver(obs);}        // 2.unsubscribe
    }, [props.model])

    return <React.Fragment>
        <SettingsView
            setFreeAPI= {x => props.model.setFreeAPI(x)}
            freeAPI = {freeAPI}
            setLifeline = {x => props.model.setAllowLifeline(x)}
            lifeline = {lifeline}
            time = {time}
            rounds = {rounds}
            onMoveTimer = {value => props.model.setChosenTime(value)}
            onMoveRounds = {value => props.model.setTotalRounds(value)}
        />

    </React.Fragment>

}
