import React from "react";
import { Link } from "react-router-dom";
import QuickShowSlider from "./quickshow_slider";

class QuickShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="quickshow_container">
        <Link className="quickshow_link" to={`/spots/${this.props.spot._id}`}>
          <QuickShowSlider spot={this.props.spot} />
          <div className="bottom_half">
            <div className="spot_infobar">
              <p className="spot_name">{this.props.spot.name}</p>
              <p className="spot_description">{this.props.spot.description}</p>
            </div>
            <div className="review_bar">Reviews</div>
          </div>
        </Link>
      </div>
    );
  }
}

export default QuickShow;

{
  /* <div className="quickshow_photobar" /> */
}
{
  /* <img src={this.props.spot.photos[0]} className="quickshow-photo" alt=""/> */
}
