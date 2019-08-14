import axios from "axios";

export const fetchSurfSpots = city => {
  return axios.get(`/api/city?city=${city}`);
}; // axios can't create get request w body (user query instead)

export const fetchSingleSurfSpot = spotId => {
  return axios.get(`/api/spots/${spotId}`);
};
