function HomeView(props) {
    let sneaky;
    if (props.currentUser == null) {
        sneaky = ""
    }
    else sneaky = "hidden";

    let reverseSneaky;
    if (!(props.currentUser == null)) {
        reverseSneaky = ""
    }
    else reverseSneaky = "hidden";

        return <div id="home-view-container">
                <div id="home-view-game-display-box">
                    <h1>In other words</h1>
                    <div id="home-view-btns-container">
                        <button className="home-view-btn" onClick={() => {props.startup()}}>PLAY</button>
                        <button className="home-view-btn" onClick={e=> window.location.hash="#instructions"}>INSTRUCTIONS</button>
                        <button className="home-view-btn" onClick={e=> window.location.hash="#settings"}>SETTINGS</button>
                        <button id={sneaky} className="home-view-btn" onClick={() => window.location.hash="#login"}>ACCOUNT</button>
                        <button id={reverseSneaky} className="home-view-btn" onClick={() => props.signOut()}>SIGNOUT</button>

                    </div>          
                </div>
            </div>
}

//<button id={reverseSneaky} className="home-view-btn" onClick={() => props.show()}>SHOW INFO</button>