import {
  RECEIVE_SINGLE_SURF_SPOT,
  RECEIVE_SURF_SPOTS,
  RECEIVE_SURF_SPOT_ERRORS,
  RECEIVE_SEARCH,
  RECEIVE_REVIEW
} from "../../actions/surf_spot_actions";
import { merge } from "lodash";

const surfSpotsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SURF_SPOTS:
      return action.spots;
    case RECEIVE_SINGLE_SURF_SPOT:
      return merge({}, state, { [action.spot._id]: action.spot });
    case RECEIVE_SURF_SPOT_ERRORS:
      return {};
    case RECEIVE_REVIEW:
      return merge({}, state, { [action.spot._id]: action.review });
    case RECEIVE_SEARCH:
      return action.searchResults;
    default:
      return state;
  }
};

export default surfSpotsReducer;
