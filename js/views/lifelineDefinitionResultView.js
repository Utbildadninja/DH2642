function LifelineDefinitionResultView(props) {
    return (
        <div className="container">
            <h2>Definitions:</h2>
            <ul>
                {[...props.lifelineArray].map(function (x) {
                    return <li>{x.text}</li>})
                }
            </ul>
        </div>
    )
}