import React from "react";
import { Link } from "react-router-dom";
import '../../css/sessions.css';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      email: "",
      password: "",
      password2: ""
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.history.push('/login');
    }

    this.setState({ errors: nextProps.errors })
  }
  
  render() {
    return (
      <div className="session-form-container">
        <form onSubmit={this.handleSubmit} className="session-form">
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

          <button type="submit" className="session-submit">Join Ripcamp</button>
        </form>

        <div className="session-footer">
          <Link to="/login">
            <p>Already a user? Login</p>
          </Link>

        </div>
      </div>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state);
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
