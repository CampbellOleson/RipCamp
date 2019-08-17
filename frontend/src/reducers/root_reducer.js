import { combineReducers } from "redux";
import session from "./session/session_reducer";
import errors from "./errors_reducer";
import entites from "./entities_reducer";
import uiReducer from "./ui/ui_reducer";

const RootReducer = combineReducers({
  entities: entites,
  ui: uiReducer,
  session,
  errors
});

export default RootReducer;
