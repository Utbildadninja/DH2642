function NavigationbarView(props) {
    return (
        <div className="home">
            <span onClick={() => {
                if (props.inGame() && window.confirm("Exit game?")) {
                    window.location.hash="#home";
                }
                else if (!props.inGame()) window.location.hash="#home"
            }}><img src={"home.svg"}/></span>
            
        </div>
    )
}

/*function NavigationbarView(props) {
    const defaultView = (
            <span onClick={() => {
                    if (props.inGame() && window.confirm("Exit game?")) {
                        window.location.hash="#home";
                    }
                    else if (!props.inGame()) window.location.hash="#home"
                }}><img src={"home.svg"}/>
            </span>
    );

    if(!props.email) {
        return (
            <div className="container">
                {defaultView}
            </div>
            
        );
    } else {
        return (
            <div className="container">
                {defaultView}
                {props.email}
            </div>
        );
    }
}
*/

