function EndGameView (props) {
    return <div className={"container"}>
        <h1>Game over!</h1>
        <br/>

            {[...props.teams].map(function (team) {
                return <span key = {team.name}>
                    <div className="endGame-view-result-div">
                        <h2>Team: {team.name}</h2>
                        <h3>Score: {team.score}</h3>
                        <h3>Correct guesses:</h3>
                        {team.correctGuesses.map(function (guess, index) {
                            return <div key={index}>
                                {guess}
                            </div>
                        })}
                    </div>
                    <br/>
                </span>
            })}

            <button className="home-view-btn" onClick={e => {window.location.hash="#home"}}>MAIN MENU</button>
    </div>
}