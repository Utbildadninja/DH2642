function PauseView(props) {
    return (
        <div className="container">
            <div>
                <h1>Get ready!</h1>
                <p>Team {props.team.name}, you're up!</p>
                <p>Make sure the person guessing can't see the screen!</p>
            </div>
            <button className="home-view-btn" onClick={()=> {window.location.hash="#currentGame"; props.continue()}}>CONTINUE</button>            
        </div>
    )
}