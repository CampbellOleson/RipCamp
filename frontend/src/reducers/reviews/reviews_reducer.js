

import {
    RECEIVE_REVIEWS,
    RECEIVE_NEW_REVIEW
} from "../../actions/surf_spot_actions";
import { merge } from "lodash";

const reviewsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_NEW_REVIEW:
            return merge({}, state, { [action.review]: action.review });
        case RECEIVE_REVIEWS:
            return merge({}, state, { [action.reviews]: action.reviews });
        default:
            return state;
    }
};

export default reviewsReducer;
