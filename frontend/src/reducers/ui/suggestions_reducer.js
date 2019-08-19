import { RECEIVE_SEARCH_SUGGESTIONS } from "../../actions/surf_spot_actions";

const suggestionsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_SEARCH_SUGGESTIONS:
      return action.suggestions;
    default:
      return state;
  }
};

export default suggestionsReducer;
