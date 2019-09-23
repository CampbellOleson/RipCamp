import { connect } from "react-redux";
import { getSearchSuggestions, closeSuggestions } from "../../actions/surf_spot_actions";
import { updateFilter, nullifySearch } from "../../actions/filter_actions";
import SearchBar from "./searchbar";
import { withRouter } from 'react-router-dom';

const msp = state => ({
  spots: state.entities.spots,
  suggestions: Object.values(state.entities.suggestions)
});

const mdp = dispatch => ({
  getSearchSuggestions: search => dispatch(getSearchSuggestions(search)),
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
  nullifySearch: () => dispatch(nullifySearch()),
  closeSuggestions: () => dispatch(closeSuggestions())
});

export default withRouter(connect(
  msp,
  mdp
)(SearchBar));
