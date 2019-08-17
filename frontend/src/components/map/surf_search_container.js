import { connect } from "react-redux";
import { getSurfSpots } from "../../actions/surf_spot_actions";
import { updateFilter } from "../../actions/filter_actions";
import SurfMap from "./surf_map";
import SurfSpotsIndex from "../surf_spots/surf_spots_index";

const msp = state => ({
  spots: Object.values(state.entities.surfSpots),
  search: state.ui.filters
    ? state.ui.filters.search
      ? state.ui.filters.search
      : null
    : null
});

const mdp = dispatch => ({
  getSurfSpots: filter => dispatch(getSurfSpots(filter)),
  updateFilter: (name, value) => dispatch(updateFilter(name, value))
});

export const SurfMapContainer = connect(
  msp,
  mdp
)(SurfMap);

export const SurfSpotsIndexContainer = connect(
  msp,
  mdp
)(SurfSpotsIndex);
