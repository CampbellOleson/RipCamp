import { UPDATE_FILTER, NULLIFY_SEARCH } from "../../actions/filter_actions";
import merge from "lodash/merge";

const filters_reducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case UPDATE_FILTER:
      return merge({}, state, { [action.filter]: action.value });
    case NULLIFY_SEARCH:
      return merge({}, state, { search: null });
    default:
      return state;
  }
};

export default filters_reducer;
