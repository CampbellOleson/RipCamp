import React from "react";
const GoogleMapsLoader = require("google-maps");

class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
    this.createMarkerFromSpot = this.createMarkerFromSpot.bind(this);
    this.removeMarker = this.removeMarker.bind(this);
  }

  updateMarkers(spots) {
    console.log("time to update");
    spots.map(spot => {
      if (!this.markers[spot._id]) {
        this.createMarkerFromSpot(spot);
      }
    });

    const spotObj = {};
    //remove old markers
    spots.map(spot => (spotObj[spot._id] = spot));
    Object.keys(this.markers).map(markerId => {
      // if there is an outdated marker remove it
      if (!spotObj[markerId]) {
        this.removeMarker(this.markers[markerId]);
      }
    });
  }

  removeMarker(marker) {
    marker.setMap(null);
    delete this.markers[marker.id];
  }

  createMarkerFromSpot(spot) {
    const pos = { lat: spot.lat, lng: spot.lng };
    let marker;
    let infoWindow;
    GoogleMapsLoader.load(google => {
      marker = new google.maps.Marker({
        position: pos,
        map: this.map,
        title: spot.name,
        id: spot._id
      });
    });

    const contentString =
      '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      `<h3 id="firstHeading" class="firstHeading">${spot.name}</h3>` +
      '<div id="bodyContent">' +
      `<p>${spot.description}</p>` +
      "</div>" +
      "</div>";

    GoogleMapsLoader.load(google => {
      infoWindow = new google.maps.InfoWindow({ content: contentString });
    });

    marker.setMap(this.map);
    this.markers[marker.id] = marker;

    marker.addListener("click", function() {
      infoWindow.open(this.map, marker);
    });

    this.map.addListener("click", function(event) {
      infoWindow.close();
    });
  }
}

export default MarkerManager;

// this.map.addListener(this.map, "click", function(event) {
//   infoWindow.close();
// });
