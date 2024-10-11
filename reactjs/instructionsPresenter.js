function InstructionsPresenter(props) {

    return <React.Fragment>
        <InstructionsView
            startup = {() => props.model.startup()}
        />
    </React.Fragment>

}
