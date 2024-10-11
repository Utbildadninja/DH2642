function EndGamePresenter(props){
    const [teams, setTeams]=React.useState(props.model.teams);

    React.useEffect( function(){
        function obs(){
            setTeams(props.model.teams);
        }
        props.model.addObserver(obs);
        return function(){ props.model.removeObserver(obs);}
    }, [props.model])

    return <EndGameView
        teams = {teams}
    />
}