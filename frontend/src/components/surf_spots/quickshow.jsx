import React from "react";
import { Link } from "react-router-dom";
import QuickShowSlider from "./quickshow_slider";

class QuickShow extends React.Component {
  render() {
    const spot = this.props.spot;
    return (
      <div className="quickshow_container" id={spot._id}>
        <Link className="quickshow_link" to={`/spots/${spot._id}`}>
          <QuickShowSlider spot={spot} />
          <div className="bottom_half">
            <div className="spot_infobar">
              <p className="spot_name">{spot.name}</p>
              <p className="spot_city">{spot.city}</p>
              <p className="spot_description">{spot.description}</p>
            </div>
            <div className="review_bar">
              <p>Reviews</p>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default QuickShow;
