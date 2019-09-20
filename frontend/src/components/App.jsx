import React from "react";
import { Route, Switch } from 'react-router-dom';
import { ProtectedRoute, AuthRoute } from "../util/api_routes_util";
import { SurfSpotsIndexContainer } from "./map/surf_search_container";
import NavbarContainer from "./nav/navbar_container";
import SurfSpotShowContainer from "../components/surf_spots/surf_spot_show_container";
import Splash from './splash/splash';
import Modal from './modal/modal';
import Footer from './footer/footer';

const App = () => {
  return (
    <>

      <div className="main">
        <Modal />
        <Route path="/" component={NavbarContainer} />

        <Switch>
          <Route exact path="/" component={Splash}/>
          <AuthRoute exact path="/spots" component={SurfSpotsIndexContainer} />
          <AuthRoute exact path="/spots/:spot_id" component={SurfSpotShowContainer} />
        </Switch>
      
        <Footer />
      </div>
    </>
  );
};

export default App;
