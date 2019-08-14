import { combineReducers } from "redux";
import surfSpotReducer from "./surf_spot_reducer";

const entitiesReducer = combineReducers({
  surfSpots: surfSpotReducer
});

export default entitiesReducer;
