import { combineReducers } from "redux";
import surfSpotsReducer from "./surf_spots/surf_spots_reducer";
import suggestionsReducer from "./ui/suggestions_reducer";
import reviewsReducer from "./reviews/reviews_reducer"

const entitiesReducer = combineReducers({
  surfSpots: surfSpotsReducer,
  suggestions: suggestionsReducer,
  reviews: reviewsReducer
});

export default entitiesReducer;
