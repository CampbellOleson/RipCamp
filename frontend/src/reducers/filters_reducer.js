import { UPDATE_FILTER } from "../actions/filter_actions";
import merge from "lodash/merge";

const filters_reducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case UPDATE_FILTER:
      return merge({}, state, { [action.filter]: action.value });
    default:
      return state;
  }
};

export default filters_reducer;
