import React from "react";
import MarkerManager from "../../util/marker_manager";

var GoogleMapsLoader = require("google-maps");
GoogleMapsLoader.KEY = "AIzaSyD0-9GqpxYu6bzDIzbJou9oHpWscNKEUd0";

class SurfMap extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const map = this.refs.map; // div ele
    let gMap = null;
    const mapOptions = {
      center: { lat: 33.5, lng: -118.1 },
      zoom: 8
    };
    this.map = GoogleMapsLoader.load(google => {
      const gMap = new google.maps.Map(map, mapOptions);
      this.MarkerManager = new MarkerManager(gMap);
      this.MarkerManager.updateMarkers(this.props.spots);
    });

    

  }

  componentDidUpdate() {
    if (this.MarkerManager) {
      this.MarkerManager.updateMarkers(this.props.spots);
    }
  }

  render() {
    return <div className="map" ref="map" />;
  }
}

export default SurfMap;
