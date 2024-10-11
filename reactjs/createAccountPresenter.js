function CreateAccountPresenter(props){
    const [email, setEmail] = React.useState(props.model.email);
    const [password, setPassword] = React.useState("");
    const [username, setUsername] = React.useState("");

    React.useEffect( function() {
        function currentObserver() { 
            setUsername(props.model.currentUsername);
            setEmail(props.model.email);
            setPassword(props.model.password);
        }
            
        props.model.addObserver(currentObserver);   

        return function() {
            props.model.removeObserver(currentObserver);
        }
    }, [props.model])                                           

    return <CreateAccountView 
                email = {email}
                password = {password}
                onUsernameText = { text => setUsername(text)}
                onEmailText = { text => setEmail(text)}
                onPasswordText = { text => setPassword(text)}
                createCurrentAccount = { () => props.model.createAccountEmail(email, password, username)}
            />
}