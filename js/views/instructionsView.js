function InstructionsView(props) {    
    return (
        <div className="container">
            <h1>Instructions</h1>
            <div className="instructions-view-container">
                <h3>How to play</h3>
                <div id="instructions-view-text-container">
                    <p>Hotseat is the only available mode for now. That is, you share the same screen with all other players. For example, passing around
                    a mobile phone (or taking turns at the computer).</p>
                    <p>Team up in teams of two. <b>Describe the word on the screen to your partner without actually saying the word.</b> Speed is of the essence however!</p>
                    <p>When your partner makes a correct guess, press correct and a new word will appear. If the word is too hard, you can skip it instead and a new word will appear.</p>
                    <p>When the time is up, you stop talking. Your partner may make one final guess.</p>
                    <p>A summary is now displayed where you can remove words you marked as correct. For example, if you accidentally said the word and the other teams call you out on it.</p>
                    <p>Once you've admired your fantastic results for long enough, press next team and hand the phone to another team (or give your seat at the computer to another team).</p>
                    <p>Next time it's your team again, let your partner do the explaining instead! That is, take turns guessing and explaining as the rounds pass.</p>
                    <p>Make sure your partner never sees the word on the screen!</p>
                </div>
            </div>

            <div className="instructions-view-container">
                <h3>Setup a game:</h3>
                <p>Press <a onClick = {() => props.startup()} target="_blank" rel="noopener noreferrer">PLAY</a>. Choose your team names and go! A minimum of two teams is required to play. You can however start the game with one team for testing purposes.</p>
                <p>You can fine tune the settings under <a onClick = {event => window.location.hash = "#settings"} target="_blank" rel="noopener noreferrer">SETTINGS</a>.</p>
                <p>Create an account to save your favorite settings for next time!</p>
            </div>
        </div>
    )
}
