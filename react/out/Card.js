var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Card = function (_React$Component) {
    _inherits(Card, _React$Component);

    function Card(_props) {
        _classCallCheck(this, Card);

        var _this = _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).call(this, _props));

        _this.handleChange = _this.handleChange.bind(_this);

        _this.submitClick = _this.submitClick.bind(_this);
        _this.registerClick = _this.submitClick.bind(_this);

        _this.submitButton = React.createRef();

        _this.state = {
            type: "login",
            email: "Email...",
            password: "Password...",
            profilePicture: _props.profilePicture
        };
        return _this;
    }

    _createClass(Card, [{
        key: "submitClick",
        value: function submitClick() {
            this.submitButton.current.click();
        }
    }, {
        key: "registerClick",
        value: function registerClick() {
            this.submitButton.current.click();
        }
    }, {
        key: "handleChange",
        value: function handleChange(_event, name) {

            var curState = this.state;

            if (name === 'email') {
                curState.email = _event.target.value;
            }

            if (name === 'password') {
                curState.password = _event.target.value;
            }

            this.setState(curState);
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

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
                                React.createElement(
                                    "div",
                                    { className: "notifier-card-input-d" },
                                    React.createElement("input", { className: "notifier-card-input notifier-card-input-email", type: "text", placeholder: "Email...", onChange: function onChange(e) {
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
                        { action: "/?command=login", method: "post" },
                        React.createElement("input", { className: "notifier-card-input-email-real", type: "text", name: "email", value: this.state.email }),
                        React.createElement("input", { className: "notifier-card-input-password-real", type: "password", name: "password", value: this.state.password }),
                        React.createElement(
                            "div",
                            { className: "login-submit-button text-center", onClick: this.submitClick },
                            "Log In"
                        ),
                        React.createElement(
                            "div",
                            { className: "register-submit-button text-center", onClick: this.registerClick },
                            "Register"
                        ),
                        React.createElement("input", { className: "notifier-card-input-email-real", ref: this.submitButton, type: "submit", value: "Log In" })
                    )
                )
            );
        }
    }]);

    return Card;
}(React.Component);