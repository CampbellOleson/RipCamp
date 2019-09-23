import React from 'react'; 
import { connect } from 'react-redux';

import { closeModal } from '../../actions/modal_actions';

import Login from '../session/login_form_container';
import Signup from '../session/signup_form_container';

const Modal = (props) => {
    if (!props.modal) return null;
    let component;
    switch (props.modal) {
        case 'login':
            component = <Login />
            break;
        case 'signup':
            component = <Signup />
            break;
        default:
            return null;
    }

    return (
        <div className="modal-bg" onClick={props.close}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

const msp = state => ({
    modal: state.ui.modal
})

const mdp = dispatch => ({
    close: () => dispatch(closeModal())
})

export default connect(msp, mdp)(Modal);