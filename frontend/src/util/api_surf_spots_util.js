import axios from "axios";

export const fetchSurfSpots = filter => {
  return axios.get(`/api/filter?filter=${filter}`);
};

export const fetchSingleSurfSpot = spotId => {
  return axios.get(`/api/spots/${spotId}`);
};
