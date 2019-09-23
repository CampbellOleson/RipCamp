import React from "react";
import { Link } from "react-router-dom";
import Weather from "../weather/weather";
import Reviews from  "./reviews_index_container";

class SurfSpotShow extends React.Component {
  constructor(props) {
    super(props);
    this.difficultyColor = this.difficultyColor.bind(this);
    this.state = {
      selectedPhoto: 0
    };

    this.forwardPhoto = this.forwardPhoto.bind(this);
    this.backPhoto = this.backPhoto.bind(this);
  }

  componentDidMount() {
    const id = this.props.match.params.spot_id;
    // this.props.closeSuggestions();
    this.props.getSingleSurfSpot(id);
  }

  componentDidUpdate(prevProps) {
    const id = this.props.match.params.spot_id;
    if (prevProps.spot && prevProps.spot._id != id) {
      this.props.getSingleSurfSpot(id);
    }
  }

  forwardPhoto(e) {
    e.preventDefault();
    const length = this.props.spot.photos.length;
    const prevPhoto = this.state.selectedPhoto;
    this.setState({ selectedPhoto: (prevPhoto + 1) % length });
  }

  backPhoto(e) {
    e.preventDefault();
    const length = this.props.spot.photos.length;
    const prevPhoto = this.state.selectedPhoto;
    const temp = length - 1;
    if (prevPhoto - 1 === -1) {
      this.setState({ selectedPhoto: temp % length });
    } else {
      this.setState({ selectedPhoto: Math.abs(prevPhoto - 1) % length });
    }
  }

  render() {
    const spot = this.props.spot;
    if (!spot) {
      return null;
    }
    const photo = spot.photos[this.state.selectedPhoto];
    return (
      <div className="spot-show-container">
        <div
          className="show-photos-container"
          style={{ backgroundImage: `url(${photo})` }}
        >
          <div className="show_slider_button_container">
            <button className="show_slider_button" onClick={this.backPhoto}>
              <img
                className="show_slider_button_photo"
                src="https://ripcamp-dev.s3-us-west-1.amazonaws.com/back_arrow.png"
                alt=""
              />
            </button>
            <button className="show_slider_button" onClick={this.forwardPhoto}>
              <img
                className="show_slider_button_photo"
                src="https://ripcamp-dev.s3-us-west-1.amazonaws.com/forward_arrow.png"
                alt=""
              />
            </button>
          </div>
        </div>

        <div className="content-inner">
          <div className="show-content-wrapper">
            <div className="show-location">
              <Link to="" className="city-link">
                {spot.city}
              </Link>
              <p>{">"}</p>
              <p>{spot.name}</p>
            </div>
            <div className="name-difficulty-wrapper">
              <div className="name-container">
                <p className="name">{spot.name}</p>
              </div>
              <div className={`difficulty-box ${this.difficultyColor()}`}>
                <p>{spot.difficulty}</p>
              </div>
            </div>

            <div className="description-container">
              <div className="description">Description: {spot.description}</div>
            </div>
            <br />
            <div className="reviews-container">
              <a href="#reviews" className="reviews-link">
                
                <Reviews />
              </a>
            </div>
          </div>

          <div className="weather-wrapper">
            <Weather spot={spot} />
          </div>
        </div>
      </div>
    );
  }

  difficultyColor() {
    switch (this.props.spot.difficulty) {
      case "beginner":
        return "green";
      case "intermediate":
        return "blue";
      case "difficult":
        return "red";
      case "dangerous":
        return "black";
      default:
        return "blue";
    }
  }
}

export default SurfSpotShow;
