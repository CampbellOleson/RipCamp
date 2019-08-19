import { connect } from "react-redux";
import { getSearchSuggestions } from "../../actions/surf_spot_actions";
import { updateFilter } from "../../actions/filter_actions";
import SearchBar from "./searchbar";

const msp = state => ({
  spots: state.entities.spots,
  suggestions: Object.values(state.entities.suggestions)
});

const mdp = dispatch => ({
  getSearchSuggestions: search => dispatch(getSearchSuggestions(search)),
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});

export default connect(
  msp,
  mdp
)(SearchBar);
