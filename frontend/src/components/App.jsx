import React from "react";
import SignupForContainer from "./session/signup_form_container";
import LoginFormContainer from "./session/login_form_container";
import { Route } from "react-router-dom";
import { AuthRoute } from "../util/api_routes_util";
import SurfSpotsIndexContainer from "./surf_spots/surf_spots_index_container";
import NavbarContainer from "./nav/navbar_container";
import SurfSpotShowContainer from "../components/surf_spots/surf_spot_show_container";

const App = () => {
  return (
    <>
      <Route path="/" component={NavbarContainer} />
      <div className="main">
        <Route exact path="/" component={SurfSpotsIndexContainer} />
        <Route exact path="/spots/:spot_id" component={SurfSpotShowContainer} />
        <AuthRoute path="/signup" component={SignupForContainer} />
        <AuthRoute path="/login" component={LoginFormContainer} />
      </div>
    </>
  );
};

export default App;
