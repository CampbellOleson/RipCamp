import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import React from "react";
import { openModal } from "../actions/modal_actions";

const mapStateToProps = state => ({
  loggedIn: state.session.isSignedIn
});

const mapDispatchToProps = dispatch => ({
  openModal: () => dispatch(openModal("signup"))
});

const Protected = ({
  loggedIn,
  path,
  exact,
  component: Component,
  openModal
}) => {
  function redirectHelper() {
    openModal();
    return <Redirect to="/" />;
  }
  return (
    <Route
      path={path}
      exact={exact}
      render={props => {
        return !loggedIn ? redirectHelper() : <Component {...props} />;
      }}
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
export const ProtectedRoute = connect(
  mapStateToProps,
  mapDispatchToProps
)(Protected);
