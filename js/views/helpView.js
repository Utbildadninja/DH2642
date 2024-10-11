function HelpView(props) {
    return <div className="container">
        <p><b>Premium API: </b>Required to get meaningful words that you can actually play with. Limited calls due to freemium API subscription. 1 call per 20 words.</p>
        <p><b>Lifeline:</b> Shows definitions for the current word. Extraordinary helpful. Use with caution however, one premium API call PER WORD is made.</p>
        <p><b>Time per round:</b> How many seconds each team has to explain the words on the screen. Once the time is up, one final guess is allowed. 30 seconds recommended.</p>
        <p><b>Rounds to play:</b> How many rounds each team will get before the game is over.</p>
    </div>
}