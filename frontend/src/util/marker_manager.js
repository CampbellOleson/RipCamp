const GoogleMapsLoader = require("google-maps");

class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
    this.createMarkerFromSpot = this.createMarkerFromSpot.bind(this);
    this.removeMarker = this.removeMarker.bind(this);
  }

  updateMarkers(spots) {
    spots.map(spot => {
      if (!this.markers[spot._id]) {
        this.createMarkerFromSpot(spot);
      }
      // console.log(this.markers)
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
    const pos = {
      lat: spot.lat,
      lng: spot.lng
    };
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
      `<img id="content-pic" src=${spot.photos[0]}></img>` +
      `<h3 id="firstHeading">${spot.name}</h3>` +
      '<div id="bodyContent">' +
      `<p>${spot.description}</p>` +
      `<p id="difficulty">${spot.difficulty}</p>` +
      "</div>" +
      "</div>";

    GoogleMapsLoader.load(google => {
      infoWindow = new google.maps.InfoWindow({
        content: contentString
      });
    });

    marker.setMap(this.map);
    this.markers[marker.id] = marker;

    marker.addListener("mouseover", function () {
      infoWindow.open(this.map, marker);
    })

    const handleMouseOut = function (e) {
      infoWindow.close();
    }

    var mouseout = marker.addListener("mouseout", handleMouseOut, true)

    marker.addListener("click", function () {
      infoWindow.open(this.map, marker);
      GoogleMapsLoader.load(google => {
        google.maps.event.removeListener(mouseout);
      })
      this.map.panTo(marker.position)
      this.map.setZoom(15);
    }, true);

    this.map.addListener("click", function (event) {
      infoWindow.close();
      marker.addListener("mouseout", handleMouseOut);
      this.setZoom(10);
    });

    function quickshowHighlight() {
      const quickshow = document.getElementById(marker.id);
      const sliderButton1 = quickshow.children[0].children[0].children[0].children[0]
      const sliderButton2 = quickshow.children[0].children[0].children[0].children[1]
      sliderButton1.classList.add("active_marker_buttons");
      sliderButton2.classList.add("active_marker_buttons");
      quickshow.classList.add("active_marker")
      quickshow.parentNode.scrollTop = quickshow.offsetTop - quickshow.parentNode.offsetTop;
    }
    
    function quickshowRemove() {
      const quickshow = document.getElementById(marker.id);
      const sliderButton1 = quickshow.children[0].children[0].children[0].children[0]
      const sliderButton2 = quickshow.children[0].children[0].children[0].children[1]
      sliderButton1.classList.remove("active_marker_buttons");
      sliderButton2.classList.remove("active_marker_buttons");
      quickshow.classList.remove("active_marker")
    }

    marker.addListener("mouseover", quickshowHighlight)
    marker.addListener("mouseout", quickshowRemove)

  }

}

export default MarkerManager;