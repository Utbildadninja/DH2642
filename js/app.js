function App(props){

    return  (
        <div className="outerDiv">
            <NavigationbarPresenter model = { props.model } />

            <div className="gameParent">
                <Show hash="#home"><HomePresenter model = { props.model } /></Show>
                <Show hash="#instructions"><InstructionsPresenter model = { props.model } /></Show>
                <Show hash="#settings"><SettingsPresenter model = { props.model }/></Show>
                <Show hash="#pause"><PauseViewPresenter model = { props.model } /></Show>
                <Show hash="#currentGame"><MainGamePresenter model = { props.model } /></Show>
                <Show hash="#createAccount"><CreateAccountPresenter model = { props.model } /></Show>
                <Show hash="#login"><LoginPresenter model = { props.model } /></Show>
                <Show hash="#setup"><SetupPresenter model = { props.model } /></Show>
                <Show hash="#lifeline"><LifelinePresenter model = { props.model } /></Show>
                <Show hash="#summary"><RoundSummaryPresenter model = { props.model } /></Show>
                <Show hash="#end"><EndGamePresenter model = { props.model } /></Show>
                <Show hash="#help"><HelpPresenter model = { props.model } /></Show>
            </div>
        </div>
    );
}

function defaultRoute(){
    //console.log("defaultRoute has been called with: " + window.location.hash);
    if(!["#home", "#instructions", "#settings", "#currentGame", "#mainMenu", "#pause", "#createAccount", "#login",
        "#setup", "#lifeline", "#summary", "#end", "#help"].find((knownRoute)=> knownRoute === window.location.hash))
        window.location.hash="#home";
}
defaultRoute(); // when the application loads, set the default route!
window.addEventListener("hashchange", defaultRoute);