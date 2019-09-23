import React from "react";
import { Link } from "react-router-dom";
import { timingSafeEqual } from "crypto";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleGuestLogin = this.handleGuestLogin.bind(this);
    this.state = {
      email: "",
      password: ""
    };
    this.renderErrors = this.renderErrors.bind(this);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push("/tweets");
    }

    this.setState({ errors: nextProps.errors });
  }

  renderErrors(){
    if (this.props.errors instanceof Array || this.props.errors === null){
      return [];
    
    }else{
      const values = Object.values(this.props.errors);
      
      return (
        <div className="errors">
          {values.map((error, i) => (
            <div key={`error-${i}`}>
              {error}
            </div>
            
          ))}
        </div>
        );
    }
  }

  render() {
    return (
      <div className="session-form-container">
        <form onSubmit={this.handleSubmit} 
          className="session-form">
          <div onClick={this.props.closeModal} className="close-x">&times;</div>

          <h2 className="session-title">Welcome Back!</h2>
          <p className="session-title-small">Just one more wave...</p>
          
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

          {this.renderErrors()}
          <button type="submit" className="session-submit">
            Log In
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
            <p className="login-redirecter">
              Don't have an account? Create One
            </p>
          </Link>
        </div>
      </div>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state).then(() => this.props.closeModal());
  }

  handleGuestLogin(e) {
    e.preventDefault();
    const guest = { email: "Spongebob@bikinibottom.com", password: "password" };
    this.props.login(guest).then(() => this.props.closeModal());
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

export default LoginForm;
