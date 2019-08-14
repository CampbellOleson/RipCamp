import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import React from "react";
import App from "./App";
import "../css/loader.css";

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
);
export default Root;
