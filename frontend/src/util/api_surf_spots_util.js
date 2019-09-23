import axios from "axios";

export const fetchSurfSpots = filter => {
  const serialized = JSON.stringify(filter);
  return axios.get(`/api/filter?filter=${serialized}`);
};

export const fetchSingleSurfSpot = spotId => {
  return axios.get(`/api/spots/${spotId}`);
};

export const createReview = (data, spotId)=> {
  return axios.post(`/spots/${spotId}/reviews`, data);
};

export const getReviews = (spotId) => {
  return axios.get(`/spots/${spotId}/reviews`);
};

export const searchSpots = search => {
  return axios.get(`/api/search?search=${search}`);
};
