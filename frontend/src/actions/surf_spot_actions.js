import * as ApiSurfSpotsUtil from "../util/api_surf_spots_util";
export const RECEIVE_SURF_SPOTS = "RECEIVE_SURF_SPOTS";
export const RECEIVE_SINGLE_SURF_SPOT = "RECEIVE_SINGLE_SURF_SPOT ";
export const RECEIVE_SURF_SPOT_ERRORS = "RECEIVE_SURF_SPOT_ERRORS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEWS";

const receiveSurfSpots = spots => ({
  type: RECEIVE_SURF_SPOTS,
  spots
});

const receiveSingleSurfSpot = spot => ({
  type: RECEIVE_SINGLE_SURF_SPOT,
  spot
});

const receiveSurfSpotErrors = errors => ({
  type: RECEIVE_SURF_SPOT_ERRORS,
  errors
});

const receiveReview = review => ({
  type: RECEIVE_REVIEW,
  review
});


export const getSurfSpots = filter => dispatch =>
  ApiSurfSpotsUtil.fetchSurfSpots(filter)
    .then(spots => dispatch(receiveSurfSpots(spots.data)))
    .catch(err => dispatch(receiveSurfSpotErrors(err)));

export const getSingleSurfSpot = spotId => dispatch =>
  ApiSurfSpotsUtil.fetchSingleSurfSpot(spotId)
    .then(spot => dispatch(receiveSingleSurfSpot(spot.data)))
    .catch(err => dispatch(receiveSurfSpotErrors(err)));

export const getReviews = (review) => dispatch =>
 ApiSurfSpotsUtil.createReview(review)
 .then(review => dispatch(receiveReview(review.data)))
 .catch(err => dispatch(receiveSurfSpotErrors(err)));

export const getSearchResults = (search) => dispatch => (
   ApiSurfSpotsUtil.searchSpots(search).then(searchResults => dispatch(receiveSurfSpots(searchResults)))
 )

window.getSurfSpots = getSurfSpots;
window.getSingleSurfSpot = getSingleSurfSpot;
