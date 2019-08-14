import React from "react";
import "../../css/show.css";

class SurfSpotShow extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.spot_id;
    this.props.getSingleSurfSpot(id);
  }

  render() {
    const spot = this.props.spot;
    if (!spot) {
      return null;
    }
    return (
      <div>
        <div className="name">{spot.name}</div>
        <div className="description">{spot.description}</div>
        <div className="difficulty">{spot.difficulty}</div>
        <div className="city">{spot.city}</div>
        <div className="lng">{spot.lng}</div>
        <div className="lat">{spot.lat}</div>
        <div className="date">{spot.date}</div>
      </div>
    );
  }
}

export default SurfSpotShow;
