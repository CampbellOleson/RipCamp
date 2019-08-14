import * as ApiSurfSpotsUtil from "../util/api_surf_spots_util";
export const RECEIVE_SURF_SPOTS = "RECEIVE_SURF_SPOTS";
export const RECEIVE_SINGLE_SURF_SPOT = "RECEIVE_SINGLE_SURF_SPOT ";

const receiveSurfSpots = spots => ({
  type: RECEIVE_SURF_SPOTS,
  spots
});

const receiveSingleSurfSpot = spot => ({
  type: RECEIVE_SINGLE_SURF_SPOT,
  spot
});

export const getSurfSpots = city => dispatch =>
  ApiSurfSpotsUtil.fetchSurfSpots(city).then(spots =>
    dispatch(receiveSurfSpots(spots.data))
  );

export const getSingleSurfSpot = spotId => dispatch =>
  ApiSurfSpotsUtil.fetchSingleSurfSpot(spotId).then(spot =>
    dispatch(receiveSingleSurfSpot(spot.data))
  );

window.getSurfSpots = getSurfSpots;
window.getSingleSurfSpot = getSingleSurfSpot;
