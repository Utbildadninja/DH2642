function SettingsView(props) {
    return (
        <div id="settings-view-container">
            <div id="settings-view-header-container">
                <h1>SETTINGS</h1>
            </div>
            <br/>
            <div id="settings-view-options-container">
                <table>
                    <tbody>
                        <tr className="settings-view-currentSetting">
                            <td>
                                <h4 className="settings-view-currentSetting-header">PREMIUM API</h4>
                            </td>
                            <td className="settings-view-container-onoff-btns">
                                <button disabled={!props.freeAPI} className="settings-view-btn" onClick={() => props.setFreeAPI(false)}>ON</button>
                                <button disabled={props.freeAPI} className="settings-view-btn" onClick={() => props.setFreeAPI(true)}>OFF</button>
                            </td>
                        </tr>
                        
                        <tr>
                            <td className="settings-view-currentSetting-header">
                                <h4>LIFELINE</h4>
                            </td>
                            <td className="settings-view-container-onoff-btns">
                                <button disabled={props.lifeline} className="settings-view-btn" onClick={() => props.setLifeline(true)}>ON</button>
                                <button disabled={!props.lifeline} className="settings-view-btn" onClick={() => props.setLifeline(false)}>OFF</button>
                            </td>
                        </tr>
                        

                    </tbody>
                </table>
            </div>
            <h4>Time per round</h4>
            <div className={"slidecontainer"}>
                <input type="range" min="5" max="120" value={props.time} className="slider" onInput={event => props.onMoveTimer(event.target.value)}/>
                <p>Time: {props.time} seconds</p>
            </div>
            <h4>Rounds to play</h4>
            <div className={"slidecontainer"}>
                <input type="range" min="1" max="10" value={props.rounds} className="slider" onInput={event => props.onMoveRounds(event.target.value)}/>
                <p>Rounds: {props.rounds}</p>
            </div>
            <br/>
            <br/>
            <button onClick={() => window.location.hash="#help"} id="settings-view-help-btn">HELP</button>


        </div>
    )
}
    