import React from "react";
import "../../css/show.css";
import { Link } from "react-router-dom";

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
    this.props.getSingleSurfSpot(id);
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
    this.setState({ selectedPhoto: Math.abs(prevPhoto - 1) % length });
  }

  render() {
    const spot = this.props.spot;
    if (!spot) {
      return null;
    }
    const photo = this.props.spot.photos[this.state.selectedPhoto];
    return (
      <div className="spot-show-container">
        {/* <div className="show-photos-container" /> */}
        {/* <img src={spot.photos[0]} alt=""/> */}
        {/* <div className="slide-container">
          <span id="slider-image-1" />
          <span id="slider-image-2" />
          <span id="slider-image-3" />
          <div class="image-container">
            <img src={spot.photos[0]} className="slider-image" />
            <img src={spot.photos[1]} className="slider-image" />
            <img src={spot.photos[2]} className="slider-image" />
          </div>
          <div className="button-container">
            <a href="#slider-image-1" className="slider-button" />
            <a href="#slider-image-2" className="slider-button" />
            <a href="#slider-image-3" className="slider-button" />
          </div>
        </div> */}
        <div
          className="show-photos-container"
          style={{ backgroundImage: `url(${photo})` }}
        >
          <div className="show_slider_button_container">
            <button className="show_slider_button" onClick={this.backPhoto}>
              <img
                className="show_slider_button_photo"
                src="https://ripcamp-dev.s3-us-west-1.amazonaws.com/back_arrow.png"
              />
            </button>
            <button className="show_slider_button" onClick={this.forwardPhoto}>
              <img
                className="show_slider_button_photo"
                src="https://ripcamp-dev.s3-us-west-1.amazonaws.com/forward_arrow.png"
              />
            </button>
          </div>
        </div>

        <div className="content-inner">
          <div className="show-content-wrapper">
            <div className="show-location">
              <Link className="city-link">{spot.city}</Link>
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
            <a href="#reviews" className="reveiws-link">
              Reviews
            </a>

            <div className="description-container">
              <div className="description">Description: {spot.description}</div>
            </div>
            <br />
          </div>
          <div className="conditions-wrapper">
            <div id="conditions-header">
              <h2>Conditions</h2>
              <p>It's nice and sunny.</p>
              <p>Perfect surf weather</p>
            </div>
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
        return "yellow";
      case "difficult":
        return "red";
      case "dangerous":
        return "black";
    }
  }
}

export default SurfSpotShow;
