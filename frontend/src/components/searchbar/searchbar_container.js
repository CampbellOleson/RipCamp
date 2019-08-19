import { connect } from "react-redux";
// import { getSurfSpots } from "../../actions/surf_spot_actions";
import { updateFilter } from "../../actions/filter_actions";
import SearchBar from "./searchbar";

const msp = state => ({
  spots: state.entities.spots
});

const mdp = dispatch => ({
  // getSurfSpots: search => dispatch(getSurfSpots(search)),
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});

export default connect(
  msp,
  mdp
)(SearchBar);
