function RoundSummaryView(props) {
    return (
        <div className={"container"}>
            <h1>Round finished!</h1>
            <br/>

            <h2>Final score: {props.team.score}</h2>
            <p>If the other teams have legitimate complains about any words you marked as correct, you can remove them here.</p>
            <br/>

            <div>
                <table>
                    <tbody>
                    {props.team.correctGuesses && props.team.correctGuesses.map(function (word, index) {
                        return <tr key={index}>
                            <td>
                                <button className="setup-view-remove" onClick={() => {
                                    if(window.confirm("Really remove " + word + "?")) props.removeWord(word) }}>x</button>
                            </td>
                            <td>
                                {word}
                            </td>
                </tr>
                    })}
                    </tbody>
                </table>
            </div>
            <br/>

            <button className={"home-view-btn"} onClick={props.roundFinished}>NEXT TEAM</button>
        </div>
    )
}