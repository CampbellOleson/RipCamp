import React from "react";
import SignupForContainer from "./session/signup_form_container";
import LoginFormContainer from "./session/login_form_container";
import { Route } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/api_routes_util";
import { SurfSpotsIndexContainer } from "./map/surf_search_container";
import NavbarContainer from "./nav/navbar_container";
import SurfSpotShowContainer from "../components/surf_spots/surf_spot_show_container";

const App = () => {
  return (
    <>
      <ProtectedRoute path="/" component={NavbarContainer} />
      <div className="main">

        <AuthRoute path="/signup" component={SignupForContainer} />
        <AuthRoute path="/login" component={LoginFormContainer} />
        <ProtectedRoute exact path="/" component={SurfSpotsIndexContainer} />
        <ProtectedRoute exact path="/spots/:spot_id" component={SurfSpotShowContainer} />

      </div>
    </>
  );
};

export default App;
