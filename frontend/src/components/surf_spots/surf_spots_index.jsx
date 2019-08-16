import React from "react";
import QuickShowContainer from "./quickshow_container";
import "../../css/index.css";
import Footer from "../footer/footer";
import { SurfMapContainer } from "../map/surf_search_container";

class SurfSpotsIndex extends React.Component {
  render() {
    return (
      <div>
        <div className="surf-index-container">
          <div className="surf-greeting">
            <h1 className="surf-main-title">Surf's Up</h1>
            <h3>
              Check out unique surfing experiences at over 300,000 beaches,
              shores, ponds, seas, oceans, lakes and more.
            </h3>
          </div>
          <div className="index-map-container">
            <section className="spot-index">
              {this.props.spots.map((spot, idx) => (
                <QuickShowContainer spot={spot} key={idx} />
              ))}
            </section>
            <div className="map-container">
              <SurfMapContainer />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  componentDidMount() {
    this.props.getSurfSpots("Los Angeles");
  }
}

export default SurfSpotsIndex;

// allSurfSpots() { */}
//    const keys = Object.keys(this.props.spots);
//   const spots = keys.map(key => { */}
//    return this.props.spots[key];
//   });
//   return spots.map((spot, idx) => (
//      <QuickShowContainer spot={spot} key={idx} />
//    ));
// } }
