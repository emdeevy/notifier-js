var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoginCard = function (_React$Component) {
    _inherits(LoginCard, _React$Component);

    function LoginCard(_props) {
        _classCallCheck(this, LoginCard);

        var _this = _possibleConstructorReturn(this, (LoginCard.__proto__ || Object.getPrototypeOf(LoginCard)).call(this, _props));

        _this.handleChange = _this.handleChange.bind(_this);

        _this.submitClick = _this.submitClick.bind(_this);
        _this.secondaryClick = _this.secondaryClick.bind(_this);

        _this.profilePictureChange = _this.profilePictureChange.bind(_this);
        _this.profilePictureClick = _this.profilePictureClick.bind(_this);

        _this.submitButton = React.createRef();
        _this.fileInput = React.createRef();

        _this.props.action_link = "/?command=login", _this.props.secondary_value = "Register", _this.props.profile_picture_name = "Upload Profile Picture...", _this.props.first_name = "First Name...", _this.props.last_name = "Last Name...", _this.props.email = "Email...", _this.props.password = "Password...", _this.state = {
            type: "login",
            profilePicture: _props.profilePicture
        };
        return _this;
    }

    _createClass(LoginCard, [{
        key: "submitClick",
        value: function submitClick() {
            this.submitButton.current.click();
        }
    }, {
        key: "secondaryClick",
        value: function secondaryClick() {
            if (this.state.type === 'login') {
                this.state.type = 'register';
                this.props.action_link = '/?command=register';
                this.props.secondary_value = 'Back to Login';
            } else if (this.state.type === 'register') {
                this.state.type = 'login';
                this.props.action_link = '/?command=login';
                this.props.secondary_value = 'Register';
            }

            this.setState(this.state);
        }
    }, {
        key: "profilePictureChange",
        value: function profilePictureChange(_event) {
            var file = _event.target.files[0];

            this.props.profile_picture_name = file.name;
            this.setState(this.state);
        }
    }, {
        key: "profilePictureClick",
        value: function profilePictureClick() {
            this.fileInput.current.click();
        }
    }, {
        key: "handleChange",
        value: function handleChange(_event, name) {

            if (name === 'first_name') {
                this.props.first_name = _event.target.value;
            }

            if (name === 'last_name') {
                this.props.last_name = _event.target.value;
            }

            if (name === 'email') {
                this.props.email = _event.target.value;
            }

            if (name === 'password') {
                this.props.password = _event.target.value;
            }

            this.setState(this.state);
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var extraPlaceholders = void 0,
                extraFirstName = void 0,
                extraLastName = void 0,
                extraProfilePicture = void 0,
                extraProfilePicturePlaceholder = void 0,
                flactive = void 0;

            flactive = 'notifier-card-input notifier-card-input-email';

            if (this.state.type === 'register') {
                flactive = 'notifier-card-input notifier-card-input-email flactive';
                extraPlaceholders = React.createElement(
                    "div",
                    { className: "notifier-card-input-d d-flex justify-content-start" },
                    React.createElement("input", { className: "notifier-card-input notifier-card-input-firstname", type: "text", placeholder: "First Name...", onChange: function onChange(e) {
                            return _this2.handleChange(e, 'first_name');
                        } }),
                    React.createElement("input", { className: "notifier-card-input notifier-card-input-lastname", type: "text", placeholder: "Last Name...", onChange: function onChange(e) {
                            return _this2.handleChange(e, 'last_name');
                        } })
                );
                extraFirstName = React.createElement("input", { className: "notifier-card-input-email-real", type: "text", name: "first_name", value: this.props.first_name });
                extraLastName = React.createElement("input", { className: "notifier-card-input-email-real", type: "text", name: "last_name", value: this.props.last_name });
                extraProfilePicture = React.createElement("input", { ref: this.fileInput, className: "notifier-card-input-email-real", type: "file", name: "profile_picture", onChange: this.profilePictureChange });
                extraProfilePicturePlaceholder = React.createElement(
                    "div",
                    { className: "login-profile-picture-button mb-2 text-center", onClick: this.profilePictureClick },
                    this.props.profile_picture_name
                );
            }

            return React.createElement(
                "div",
                { className: "outside-notifier-card-wrapper" },
                React.createElement(
                    "div",
                    { className: "notifier-card p-2" },
                    React.createElement("img", { alt: "Profile Picture", src: this.state.profilePicture, className: "notifier-card-img" }),
                    React.createElement(
                        "div",
                        { className: "notifier-card-content" },
                        React.createElement(
                            "div",
                            { className: "notifier-card-login-container d-flex align-items-end" },
                            React.createElement(
                                "div",
                                { className: "notifier-card-login-input-wrapper" },
                                extraProfilePicturePlaceholder,
                                extraPlaceholders,
                                React.createElement(
                                    "div",
                                    { className: "notifier-card-input-d" },
                                    React.createElement("input", { className: flactive, type: "text", placeholder: "Email...", onChange: function onChange(e) {
                                            return _this2.handleChange(e, 'email');
                                        } })
                                ),
                                React.createElement(
                                    "div",
                                    { className: "notifier-card-input-d" },
                                    React.createElement("input", { className: "notifier-card-input notifier-card-input-password", type: "password", placeholder: "Password...", onChange: function onChange(e) {
                                            return _this2.handleChange(e, 'password');
                                        } })
                                )
                            )
                        )
                    )
                ),
                React.createElement(
                    "div",
                    { className: "hidden-form mt-2 p-2" },
                    React.createElement(
                        "form",
                        { action: this.props.action_link, method: "post" },
                        extraFirstName,
                        extraLastName,
                        extraProfilePicture,
                        React.createElement("input", { className: "notifier-card-input-email-real", type: "text", name: "email", value: this.props.email }),
                        React.createElement("input", { className: "notifier-card-input-password-real", type: "password", name: "password", value: this.props.password }),
                        React.createElement(
                            "div",
                            { className: "login-submit-button text-center", onClick: this.submitClick },
                            "Submit"
                        ),
                        React.createElement(
                            "div",
                            { className: "register-submit-button text-center", onClick: this.secondaryClick },
                            this.props.secondary_value
                        ),
                        React.createElement("input", { className: "notifier-card-input-email-real", ref: this.submitButton, type: "submit", value: "Log In" })
                    )
                )
            );
        }
    }]);

    return LoginCard;
}(React.Component);