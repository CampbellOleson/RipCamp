import React from "react";
import { Link } from 'react-router-dom';
import '../../css/navbar.css';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogOut = this.handleLogOut.bind(this);
    this.rightside = this.rightside.bind(this);
  }

  rightside() {
    const { currentUser } = this.props;

    if (currentUser) {
      return (
        <div className="right-nav">
          {/* <h2 className="logged-in-user">Welcome, {currentUser.email}</h2> */}
          <button onClick={this.handleLogOut} className="nav-logout-btn">Log Out</button>
          
        </div>
        
      )
    } else {
      return (
        <div className="right-nav">
          <Link to={"/login"} className="nav-login-btn">Sign In</Link>
          <Link to={"/signup"} className="nav-login-btn">Sign Up</Link>
        </div>
      )
    }
  }

  render() { 
    return (
      <div>
        <nav className="navbar">
          <div className="left-nav">
            <Link to={"/"} className="logo">
              <h1>🌊RIPCAMP🌊</h1>
              
            </Link>
          </div>
          {/* <button onClick={this.handleLogOut}>Log Out</button> */}

          {this.rightside()}
        </nav>
      </div>
    );
  }

  handleLogOut(e) {
    e.preventDefault();
    this.props.logout();
      // .then(history.push("/"));
  }
}

export default Navbar;
