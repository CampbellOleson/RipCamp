import { RECEIVE_SEARCH_SUGGESTIONS, CLOSE_SUGGESTIONS } from "../../actions/surf_spot_actions";
import merge from 'lodash/merge';

const suggestionsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_SEARCH_SUGGESTIONS:
      return action.suggestions;
    case CLOSE_SUGGESTIONS:
      return merge({}, state, { suggestions: null });
    default:
      return state;
  }
};

export default suggestionsReducer;
