function PauseViewPresenter(props) {
    const [team, setTeam]=React.useState(props.model.currentTeam);
    React.useEffect( function(){
        function obs(){ setTeam(props.model.currentTeam);}
        props.model.addObserver(obs);                               // 1. subscribe
        return function(){ props.model.removeObserver(obs);}        // 2.unsubscribe
    }, [props.model])

    return <PauseView
        team = {team}
        continue = {() => props.model.continue()}

    />
}