import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import React from "react";

const mapStateToProps = state => ({
  loggedIn: state.session.isSignedIn || Boolean(state.session.user)
});

const Protected = ({ loggedIn, path, exact, component: Component }) => {
  return (
    <Route
      path={path}
      exact={exact}
      render={props =>
        !loggedIn ? <Redirect to="/signup" /> : <Component {...props} />
      }
    />
  );
};

const Auth = ({ loggedIn, path, exact, component: Component }) => {
  return (
    <Route
      path={path}
      exact={exact}
      render={props =>
        loggedIn ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};

export const AuthRoute = connect(mapStateToProps)(Auth);
export const ProtectedRoute = connect(mapStateToProps)(Protected);
