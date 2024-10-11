function SetupView(props) {
    return <div className="container">
        <p>At least one team is required to start the game. A minimum of two teams are required to actually have a meaningful match.</p>
        
        <div>
            <button disabled={props.teams < 1} id="setup-view-btn" onClick={() => {window.location.hash="#pause"; props.newGame()}}>START GAME</button>
        </div>

        <form>
        <input type="text" onInput={event => props.onText(event.target.value)} placeholder = "Team name"/>
        <button id="setup-view-add-btn" type={"submit"} onClick={() => props.addTeam()}>Add team</button>
        </form>
        
        <div>
            <table>
                <tbody>
                {[...props.teams].map(function (team) {
                    return <tr key = {team.name}>
                        <td>
                            <button className="setup-view-remove" onClick={() => props.removeTeam(team)}>x</button>
                        </td>

                        <td>
                            <p>{team.name}</p>
                        </td>
                    </tr>
                })}
                </tbody>
            </table>
        </div>

    </div>
}