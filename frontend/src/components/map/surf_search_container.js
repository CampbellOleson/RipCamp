import { connect } from "react-redux";
import { getSurfSpots } from "../../actions/surf_spot_actions";
import { updateFilter } from '../../actions/filter_actions';
import SurfMap from "./surf_map";
import SurfSpotsIndex from "../surf_spots/surf_spots_index";

const msp = state => ({
  spots: Object.values(state.entities.surfSpots)
});

const mdp = dispatch => ({
  getSurfSpots: filter => dispatch(getSurfSpots(filter)),
  updateFilter: filter => dispatch(updateFilter(filter))
});

export const SurfMapContainer = connect(
  msp,
  mdp
)(SurfMap);

export const SurfSpotsIndexContainer = connect(
  msp,
  mdp
)(SurfSpotsIndex);
