import { connect } from "react-redux";
import SignupForm from "./signup_form";
import { signup, login } from "../../actions/session_actions";
import { openModal, closeModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';

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
  login: user => dispatch(login(user)),
  openModal: () => dispatch(openModal('login')),
  closeModal: () => dispatch(closeModal())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm));
