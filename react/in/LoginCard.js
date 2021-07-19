class LoginCard extends React.Component {

    constructor(_props) {
        super(_props);

        this.handleChange = this.handleChange.bind(this);

        this.submitClick = this.submitClick.bind(this);
        this.secondaryClick = this.secondaryClick.bind(this);

        this.profilePictureChange = this.profilePictureChange.bind(this);
        this.profilePictureClick = this.profilePictureClick.bind(this);

        this.submitButton = React.createRef();
        this.fileInput = React.createRef();

        this.props.action_link = "/?command=login",
        this.props.secondary_value = "Register",
        this.props.profile_picture_name = "Upload Profile Picture...",
        this.props.first_name = "First Name...",
        this.props.last_name = "Last Name...",
        this.props.email = "Email...",
        this.props.password = "Password...",

        this.state = {
            type: "login",
            profilePicture: _props.profilePicture
        };
    }

    submitClick() {
        this.submitButton.current.click();
    }

    secondaryClick() {
        if(this.state.type === 'login') {
            this.state.type = 'register';
            this.props.action_link = '/?command=register';
            this.props.secondary_value = 'Back to Login';
        }
        else if(this.state.type === 'register') {
            this.state.type = 'login';
            this.props.action_link = '/?command=login';
            this.props.secondary_value = 'Register';
        }

        this.setState(this.state);
    }

    profilePictureChange(_event) {
        let file = _event.target.files[0];

        this.props.profile_picture_name = file.name;
        this.setState(this.state);
    }

    profilePictureClick() {
        this.fileInput.current.click();
    }

    handleChange(_event, name) {

        if(name === 'first_name') {
            this.props.first_name = _event.target.value;
        }

        if(name === 'last_name') {
            this.props.last_name = _event.target.value;
        }

        if(name === 'email') {
            this.props.email = _event.target.value;
        }

        if(name === 'password') {
            this.props.password = _event.target.value;
        }

        this.setState(this.state);
    }

    render() {

        let extraPlaceholders, extraFirstName, extraLastName, extraProfilePicture, extraProfilePicturePlaceholder, flactive;

        flactive = 'notifier-card-input notifier-card-input-email';

        if(this.state.type === 'register') {
            flactive = 'notifier-card-input notifier-card-input-email flactive';
            extraPlaceholders = <div className="notifier-card-input-d d-flex justify-content-start"><input className="notifier-card-input notifier-card-input-firstname" type="text" placeholder="First Name..." onChange={e => this.handleChange(e, 'first_name')}/><input className="notifier-card-input notifier-card-input-lastname" type="text" placeholder="Last Name..." onChange={e => this.handleChange(e, 'last_name')}/></div>;
            extraFirstName = <input className="notifier-card-input-email-real" type="text" name="first_name" value={this.props.first_name} />;
            extraLastName = <input className="notifier-card-input-email-real" type="text" name="last_name" value={this.props.last_name} />;
            extraProfilePicture = <input ref={this.fileInput} className="notifier-card-input-email-real" type="file" name="profile_picture" onChange={this.profilePictureChange} />;
            extraProfilePicturePlaceholder = <div className="login-profile-picture-button mb-2 text-center" onClick={this.profilePictureClick}>{this.props.profile_picture_name}</div>;
        }

        return (
            <div className="outside-notifier-card-wrapper">
                <div className="notifier-card p-2">
                    <img alt="Profile Picture" src={this.state.profilePicture} className="notifier-card-img" />
                    <div className="notifier-card-content">
                        <div className="notifier-card-login-container d-flex align-items-end">
                            <div className="notifier-card-login-input-wrapper">
                                {extraProfilePicturePlaceholder}
                                {extraPlaceholders}
                                <div className="notifier-card-input-d"><input className={flactive} type="text" placeholder="Email..." onChange={e => this.handleChange(e, 'email')}/></div>
                                <div className="notifier-card-input-d"><input className="notifier-card-input notifier-card-input-password" type="password" placeholder="Password..." onChange={e => this.handleChange(e, 'password')}/></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="hidden-form mt-2 p-2">
                    <form action={this.props.action_link} method="post">
                        {extraFirstName}
                        {extraLastName}
                        {extraProfilePicture}
                        <input className="notifier-card-input-email-real" type="text" name="email" value={this.props.email} />
                        <input className="notifier-card-input-password-real" type="password" name="password" value={this.props.password} />
                        <div className="login-submit-button text-center" onClick={this.submitClick}>Submit</div>
                        <div className="register-submit-button text-center" onClick={this.secondaryClick}>{this.props.secondary_value}</div>
                        <input className="notifier-card-input-email-real" ref={this.submitButton} type="submit" value="Log In" />
                    </form>
                </div>
            </div>
        );
    }
}
