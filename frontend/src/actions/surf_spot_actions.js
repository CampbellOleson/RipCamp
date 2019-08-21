import * as ApiSurfSpotsUtil from "../util/api_surf_spots_util";
export const RECEIVE_SURF_SPOTS = "RECEIVE_SURF_SPOTS";
export const RECEIVE_SINGLE_SURF_SPOT = "RECEIVE_SINGLE_SURF_SPOT ";
export const RECEIVE_SURF_SPOT_ERRORS = "RECEIVE_SURF_SPOT_ERRORS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEWS";
//export const RECEIVE_SEARCH = "RECEIVE_SEARCH";
export const RECEIVE_SEARCH_SUGGESTIONS = "RECEIVE_SEARCH_SUGGESTIONS";


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


const receiveSearchSuggestions = suggestions => ({
  type: RECEIVE_SEARCH_SUGGESTIONS,
  suggestions
});


export const getSurfSpots = filter => dispatch =>
  ApiSurfSpotsUtil.fetchSurfSpots(filter)
    .then(spots => dispatch(receiveSurfSpots(spots.data)))
    .catch(err => dispatch(receiveSurfSpotErrors(err)));

export const getSingleSurfSpot = spotId => dispatch =>
  ApiSurfSpotsUtil.fetchSingleSurfSpot(spotId)
    .then(spot => dispatch(receiveSingleSurfSpot(spot.data)))
    .catch(err => dispatch(receiveSurfSpotErrors(err)));

export const getReviews = review => dispatch =>
  ApiSurfSpotsUtil.createReview(review)
    .then(review => dispatch(receiveReview(review.data)))
    .catch(err => dispatch(receiveSurfSpotErrors(err)));

export const getSearchSuggestions = search => dispatch => {
  return ApiSurfSpotsUtil.fetchSurfSpots(search).then(searchResults =>
    dispatch(receiveSearchSuggestions(searchResults.data))
  );
};