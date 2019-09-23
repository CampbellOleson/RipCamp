import { connect } from "react-redux";
import SignupForm from "./signup_form";
import { signup, login } from "../../actions/session_actions";

const mapStateToProps = state => {
  const errors = state.errors.session;
  state.errors.session = null;
  return {
    signedIn: state.session.isSignedIn,
    errors: errors
  };
};

const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signup(user)),
  login: user => dispatch(login(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);
