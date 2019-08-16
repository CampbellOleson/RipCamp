import { combineReducers } from "redux";
import session from "./session_reducer";
import errors from "./errors_reducer";
import entites from "./entities_reducer";
import uiReducer from "./ui_reducer";

const RootReducer = combineReducers({
  entities: entites,
  ui: uiReducer,
  session,
  errors
});

export default RootReducer;
