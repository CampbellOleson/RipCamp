import axios from "axios";

export const fetchSurfSpots = filter => {
  const serialized = JSON.stringify(filter);
  return axios.get(`/api/filter?filter=${serialized}`); // we need to serialize this obj to send it and then parse it
};

export const fetchSingleSurfSpot = spotId => {
  return axios.get(`/api/spots/${spotId}`);
};
