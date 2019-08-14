import React from "react";
import { Link } from "react-router-dom";

class QuickShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="quickshow_container">
        <Link className="quickshow_link" to={`/spots/${this.props.spot._id}`}>
          <div className="quickshow_photobar" />
          <div className="spot_infobar">
            <p className="spot_name">{this.props.spot.name}</p>
            <p className="spot_description">{this.props.spot.description}</p>
            <div className="review_bar" />
          </div>
        </Link>
      </div>
    );
  }
}

export default QuickShow;
