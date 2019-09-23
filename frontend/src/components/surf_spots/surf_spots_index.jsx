import React from "react";
import QuickShowContainer from "./quickshow_container";
import { SurfMapContainer } from "../map/surf_search_container";
// import SearchBar from "../searchbar/searchbar_container";

class SurfSpotsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.spotIndex = this.spotIndex.bind(this);
  }

  render() {
    return (
      <div>
        <div className="surf-index-container">
          <div className="index-map-container">
            <section className="spot-index">{this.spotIndex()}</section>
            <div className="map-container">
              <SurfMapContainer />
            </div>
          </div>
        </div>
      </div>
    );
  }

  spotIndex() {
    return this.props.spots.length > 0 ? (
      this.props.spots.map((spot, idx) => (
        <QuickShowContainer spot={spot} key={idx} />
      ))
    ) : (
      <div className="no-spots-container">
        <p className="no-spots">No surf spots currently exist in this area</p>
      </div>
    );
  }
}

export default SurfSpotsIndex;