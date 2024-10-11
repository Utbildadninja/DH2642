function CreateAccountView (props) {
    return (
        <form>
            <div className="container">
                <h1>Create account</h1>
                <input type="text" placeholder="Username" onInput = { event => props.onUsernameText(event.target.value) } required/>
                <br/>
                <input type="text" placeholder="E-mail" onInput = { event => props.onEmailText(event.target.value) } required/>
                <br/>
                <input type="password" placeholder="Password" onInput = { event => props.onPasswordText(event.target.value) } required/>
                <br/>
                <br/>

                <button className="account-btn" onClick = { props.createCurrentAccount }>Submit</button>
            </div>   
        </form>     
    )
}