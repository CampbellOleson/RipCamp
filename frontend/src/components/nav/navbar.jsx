import React from "react";
import { Link } from 'react-router-dom';
import SearchBar from '../searchbar/searchbar_container';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogOut = this.handleLogOut.bind(this);
    this.rightside = this.rightside.bind(this);
  }

  rightside() {
    const { currentUser, openModal, signedIn } = this.props;

    if (signedIn) {
      return (
        <div className="right-nav">
          <h4 className="logged-in-user">Welcome, {currentUser.email}</h4>
          <button onClick={this.handleLogOut} className="nav-logout-btn">Log Out</button>
          
        </div>
        
      )
    } else {
      return (
        <div className="right-nav">
          <button onClick={() => openModal('login')} className="nav-login-btn">Log In</button>
          <button onClick={() => openModal('signup')}  className="nav-login-btn">Sign Up</button>
        </div>
      )
    }
  }

  render() { 
    let searchbar;
    if (this.props.location.pathname !== "/") {
      searchbar = <SearchBar />
    }
    return (

      <nav className="navbar">
        <div className="left-nav">
          <Link to="/" className="logo">
            <h1>RIPCAMP</h1>
          </Link>
          {searchbar}
        </div>
        {/* <button onClick={this.handleLogOut}>Log Out</button> */}

        {this.rightside()}
      </nav>
    );
  }

  handleLogOut(e) {
    e.preventDefault();
    this.props.logout();
      // .then(history.push("/"));
  }
}

export default Navbar;
