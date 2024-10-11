function LoginView(props) {
    return (
            <form>
                <div className="container">
                    <input type="text" placeholder="E-mail" onInput = { event => props.onEmailText(event.target.value) } required/>
                    <br/>
                    <input type="password" placeholder="Password" onInput = { event => props.onPasswordText(event.target.value) } required/>
                    <br/>
                    <br/>

                    <button className="account-btn" onClick={() => {props.loginCurrentUser()} } type="submit">Login</button>
                </div>
                
                <div className="container signin">
                    <a onClick = {event => window.location.hash = "#createAccount"} target="_blank" rel="noopener noreferrer">Create account</a>
                </div>
            </form>
    )
}