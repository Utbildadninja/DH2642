function LifelineView(props) {
    return (
        <div className="container">
            <h1>{props.time} sec</h1>
            <p className={"lifelineWord"}>{props.currentWord}</p>
            <button className="mainGame-view-btn-skip" onClick={() => {window.location.hash="#currentGame"; props.skip()}}>SKIP</button>
            <button className="mainGame-view-btn-success" onClick={() => {window.location.hash="#currentGame"; props.successfulGuess()}}>CORRECT</button>
        </div>
    )
}