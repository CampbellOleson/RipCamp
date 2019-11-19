import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import RootReducer from "../reducers/root_reducer";

let middleware = [thunk, logger];

if (process.env.NODE_ENV !== 'production') {
  middleware = [...middleware];
} else {
  middleware = [thunk];
}

const configureStore = (preloadedState = {}) => {
  return createStore(
    RootReducer,
    preloadedState,
    applyMiddleware(...middleware)
  );
};

export default configureStore;
