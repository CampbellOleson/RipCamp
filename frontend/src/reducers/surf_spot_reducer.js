import {
  RECEIVE_SINGLE_SURF_SPOT,
  RECEIVE_SURF_SPOTS
} from "../actions/surf_spot_actions";
import { merge } from "lodash";

const surfSpotReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SURF_SPOTS:
      return merge({}, state, action.spots);
    case RECEIVE_SINGLE_SURF_SPOT:
      return merge({}, state, { [action.spot._id]: action.spot });
    default:
      return state;
  }
};

export default surfSpotReducer;
