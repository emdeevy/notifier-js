class Card extends React.Component {

    constructor(_props) {
        super(_props);

        this.handleChange = this.handleChange.bind(this);

        this.submitClick = this.submitClick.bind(this);
        this.registerClick = this.submitClick.bind(this);

        this.submitButton = React.createRef();

        this.state = {
            type: "login",
            email: "Email...",
            password: "Password...",
            profilePicture: _props.profilePicture
        };
    }

    submitClick() {
        this.submitButton.current.click();
    }

    registerClick() {
        this.submitButton.current.click();
    }

    handleChange(_event, name) {

        let curState = this.state;

        if(name === 'email') {
            curState.email = _event.target.value;
        }

        if(name === 'password') {
            curState.password = _event.target.value;
        }

        this.setState(curState);
    }

    render() {
        return (
            <div className="outside-notifier-card-wrapper">
                <div className="notifier-card p-2">
                    <img alt="Profile Picture" src={this.state.profilePicture} className="notifier-card-img" />
                    <div className="notifier-card-content">
                        <div className="notifier-card-login-container d-flex align-items-end">
                            <div className="notifier-card-login-input-wrapper">
                                <div className="notifier-card-input-d"><input className="notifier-card-input notifier-card-input-email" type="text" placeholder="Email..." onChange={e => this.handleChange(e, 'email')}/></div>
                                <div className="notifier-card-input-d"><input className="notifier-card-input notifier-card-input-password" type="password" placeholder="Password..." onChange={e => this.handleChange(e, 'password')}/></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="hidden-form mt-2 p-2">
                    <form action="/?command=login" method="post">
                        <input className="notifier-card-input-email-real" type="text" name="email" value={this.state.email} />
                        <input className="notifier-card-input-password-real" type="password" name="password" value={this.state.password} />
                        <div className="login-submit-button text-center" onClick={this.submitClick}>Log In</div>
                        <div className="register-submit-button text-center" onClick={this.registerClick}>Register</div>
                        <input className="notifier-card-input-email-real" ref={this.submitButton} type="submit" value="Log In" />
                    </form>
                </div>
            </div>
        );
    }
}
