function LifelinePresenter(props){
    const [promise, setPromise]=React.useState(null);
    const [data, setData]= React.useState(null);
    const [error, setError]= React.useState(null);
    const [word, setWord]= React.useState(props.model.currentWord);
    const [time, setTime]=React.useState(props.model.time);
    //console.log("LifelinePresenter")
    React.useEffect(
        function(){
            //console.log("Inside useEffect promise")
            setData(null); setError(null); setWord(props.model.currentWord);
            let cancelled=false;
            if(promise)
                promise.then(function(dt){  if(!cancelled) setData(dt);})
                    .catch(function(er){ if(!cancelled) setError(er);});

            return function(){ cancelled=true; };
        },
        [promise]
    );

    React.useEffect(
        function(){
            //console.log("Inside useEffect mount")
            setPromise(GameSource.getDefinitionsFromAPI(props.model.currentWord))
        },
        []
    );

    React.useEffect( function(){
        function obs(){
            //console.log("Inside useEffect props")
            setTime(props.model.time);
        }
        props.model.addObserver(obs);
        return function(){ props.model.removeObserver(obs);}
    }, [props.model])

    return <React.Fragment>
    <LifelineView
        //definition = {() => {setPromise(GameSource.getDefinitionsFromAPI(props.model.currentWord))}}
        currentWord = {word}
        successfulGuess = {() => props.model.successfulGuess()}
        skip = {() => props.model.skip()}
        time = {time}
    />
    {promiseNoData(promise, data, error) || <LifelineDefinitionResultView
        lifelineArray = {data}
    />}
    </React.Fragment>
}