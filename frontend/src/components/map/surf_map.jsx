import React from "react";
import MarkerManager from "../../util/marker_manager";

var GoogleMapsLoader = require("google-maps");
GoogleMapsLoader.KEY = "AIzaSyD0-9GqpxYu6bzDIzbJou9oHpWscNKEUd0";

class SurfMap extends React.Component {
  constructor(props) {
    super(props);
    this.listenBounds = this.listenBounds.bind(this);
  }

  componentDidMount() {
    const map = this.refs.map;
    const mapOptions = {
      center: { lat: 33.5, lng: -118.1 },
      zoom: 8
    };
    GoogleMapsLoader.load(google => {
      const gMap = new google.maps.Map(map, mapOptions);
      this.MarkerManager = new MarkerManager(gMap);
      this.MarkerManager.updateMarkers(this.props.spots);
      this.listenBounds(gMap);
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

  listenBounds(map) {
    map.addListener("idle", () => {
      const bounds = map.getBounds();
      console.log(bounds);
      const bounds_obj = {
        northEast: { lat: bounds.na.l, lng: bounds.ga.j },
        southWest: { lat: bounds.na.j, lng: bounds.ga.l }
      };
      this.props.updateFilter("bounds", bounds_obj);
    });
  }
}

export default SurfMap;
