function NavigationbarPresenter(props){
    //const [currentEmail, setCurrentEmail] = React.useState(props.model.currentUser.email);
    //const [currentUsername, setCurrentUsername] = React.useState(props.model.currentUsername);
    //const [currentUser, setCurrentUser] = React.useState(props.model.currentUser);

    React.useEffect( function() {
        function obs() {
            //setCurrentEmail(props.model.currentUser.email);
            //setCurrentUsername(props.model.currentUsername);
            //setCurrentUser(props.model.currentUser);
        }
        
        props.model.addObserver(obs); 
                                      
        return function() {
            props.model.removeObserver(obs);
        }                               
    }, [props.model])                      

    return (
            <React.Fragment>
                <NavigationbarView 
                    //email = { currentUser.email}
		            inGame = {() => (window.location.hash=="#currentGame" || window.location.hash=="#pause" ||
                        window.location.hash=="#lifeline" || window.location.hash =="#summary" || window.location.hash =="#end")}
                />
            </React.Fragment>
    )
}