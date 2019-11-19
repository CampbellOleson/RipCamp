import React from "react";
import MarkerManager from "../../util/marker_manager";
var GoogleMapsLoader = require("google-maps");
GoogleMapsLoader.KEY = "AIzaSyD0-9GqpxYu6bzDIzbJou9oHpWscNKEUd0";
GoogleMapsLoader.VERSION = "3.38";

var MAP;

class SurfMap extends React.Component {
  constructor(props) {
    super(props);
    this.listenBounds = this.listenBounds.bind(this);
  }

  componentDidMount() {
    const map = this.refs.map;
    const spot = this.props.spots[0];
    const lat = spot ? spot.lat : 34.013341;
    const lng = spot ? spot.lng : -118.50079;
    const styles = [
      {
        featureType: "administrative.neighborhood",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "poi",
        elementType: "labels.text",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "poi.business",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "road",
        elementType: "labels",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "road",
        elementType: "labels.icon",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "road.highway",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "transit",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "water",
        stylers: [
          {
            color: "#48C4DA"
          }
        ]
      },
      {
        featureType: "water",
        elementType: "labels.text",
        stylers: [
          {
            visibility: "off"
          }
        ]
      }
    ];
    const mapOptions = {
      center: { lat: lat, lng: lng },
      zoom: 5,
      minZoom: 5,
      styles: styles
    };
    GoogleMapsLoader.load(google => {
      MAP = new google.maps.Map(map, mapOptions);
      this.MarkerManager = new MarkerManager(MAP);
      this.MarkerManager.updateMarkers(this.props.spots);
      this.listenBounds(MAP);
    });
  }

  componentDidUpdate(oldProps) {
    const oldId = oldProps.spots[0] ? oldProps.spots[0]._id : 0;
    const currentId = this.props.spots[0] ? this.props.spots[0]._id : 1;
    if (
      this.MarkerManager &&
      oldProps.spots.length !== this.props.spots.length &&
      oldId !== currentId
    ) {
      this.MarkerManager.updateMarkers(this.props.spots);
    }
    if (
      (this.props.search &&
        this.props.spots.length > 0 &&
        oldProps.spots.length > 0 &&
        this.props.spots[0]._id !== oldProps.spots[0]._id) ||
      (this.props.spots.length > 0 && oldProps.spots.length === 0)
    ) {
      const spots = this.props.spots;
      this.moveToLocation(spots[0].lat, spots[0].lng);
      this.props.nullifySearch();
    }
  }

  render() {
    return <div className="map" ref="map" />;
  }

  listenBounds(map) {
    map.addListener("idle", () => {
      this.updateMapBounds(MAP);
    });
  }

  updateMapBounds(map) {
    const bounds = map.getBounds();

    const northEast = bounds.getNorthEast();
    const southWest = bounds.getSouthWest();
    const bounds_obj = {
      northEast: { lat: northEast.lat(), lng: northEast.lng() },
      southWest: { lat: southWest.lat(), lng: southWest.lng() }

    };
    this.props.updateFilter("bounds", bounds_obj);
  }

  moveToLocation(lat, lng) {
    GoogleMapsLoader.load(google => {
      const center = new google.maps.LatLng(lat, lng);
      MAP.panTo(center);
    });
  }
}

export default SurfMap;
