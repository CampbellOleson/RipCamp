import axios from "axios";

export const fetchSurfSpots = filter => {
  const serialized = JSON.stringify(filter);
  return axios.get(`/api/filter?filter=${serialized}`); // we need to serialize this obj to send it and then parse it
};

export const fetchSingleSurfSpot = spotId => {
  return axios.get(`/api/spots/${spotId}`);
};

export const createReview = (review) => {
  return axios.post(`/api/reviews`, review);
}

export const searchSpots = search => {
  return axios.get(`/api/search?search=${search}`);
}