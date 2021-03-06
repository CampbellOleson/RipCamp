import React from "react";
import { Link } from "react-router-dom";

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleGuestLogin = this.handleGuestLogin.bind(this);
    this.state = {
      email: "",
      password: "",
      password2: ""
    };
  }

  // UNSAFE_componentWillReceiveProps(nextProps) {
  //   if (nextProps.signedIn === true) {
  //     this.props.history.push("/login");
  //   }

  //   this.setState({ errors: nextProps.errors });
  // }

  renderErrors() {
    if (this.props.errors instanceof Array || this.props.errors === null) {
      return [];
    } else {
      const values = Object.values(this.props.errors);

      return (
        <div className="errors">
          {values.map((error, i) => (
            <div key={`error-${i}`}>{error}</div>
          ))}
        </div>
      );
    }
  }

  render() {
    return (
      <div className="session-form-container">
        <form onSubmit={this.handleSubmit} className="session-form">
          <div onClick={this.props.closeModal} className="close-x">
            &times;
          </div>

          <h2 className="session-title">Join Ripcamp!</h2>
          <p className="session-title-small">Discover the best surf spots!</p>

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
            className="signup-input"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
            className="signup-input"
          />
          <input
            type="password"
            name="password2"
            placeholder="Confirm password"
            value={this.state.password2}
            onChange={this.handleChange}
            className="signup-input"
          />
          {this.renderErrors()}
          <button type="submit" className="session-submit">
            Join Ripcamp
          </button>
        </form>

        <form className="guest-form" onSubmit={this.handleGuestLogin}>
          <input
            type="submit"
            value="Guest Login"
            className="guest-login-btn"
          />
        </form>

        <div className="session-footer">
          <Link to="" onClick={this.props.openModal}>
            <p className="login-redirecter">Already a user? Login</p>
          </Link>
        </div>
      </div>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state).then(() => {
      if (this.props.signedIn) {
        this.props.closeModal();
      }
    });
  }

  handleGuestLogin(e) {
    e.preventDefault();
    const guest = { email: "guest@user.com", password: "guestuser" };
    this.props.login(guest).then(() => {
      if (this.props.signedIn) {
        this.props.closeModal();
      }
    });
  }

  handleChange(e) {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    });
  }
}

export default SignupForm;
