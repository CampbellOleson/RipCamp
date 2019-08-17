import { combineReducers } from "redux";
import surfSpotsReducer from "./surf_spots/surf_spots_reducer";

const entitiesReducer = combineReducers({
  surfSpots: surfSpotsReducer
});

export default entitiesReducer;
