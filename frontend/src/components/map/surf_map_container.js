import { connect } from "react-redux";
import SurfSearch from "./surf_search";
import { getSurfSpots } from "../../actions/surf_spot_actions";

const msp = state => ({
  spots: Object.values(state.entities.surfSpots)
});

const mdp = dispatch => ({
  getSurfSpots: city => dispatch(getSurfSpots(city))
});

export default connect(msp)(SurfSearch);
