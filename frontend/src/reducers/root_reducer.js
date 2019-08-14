import { combineReducers } from "redux";
import session from "./session_reducer";
import errors from "./errors_reducer";
import entites from "./entities_reducer";

const RootReducer = combineReducers({
  entities: entites,
  session,
  errors
});

export default RootReducer;
