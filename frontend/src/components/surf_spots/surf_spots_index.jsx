import React from "react";
import QuickShowContainer from "./quickshow_container";
// import LoggedInNavContainer from "../nav/logged_in_nav_container";
import '../../css/index.css';

class SurfSpotsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="surf-index-container">
        <h1 className="surf-main-title">Surf's Up</h1>
        <h3>
          Check out unique surfing experiences at over 300,000 beaches, shores,
          ponds, seas, oceans, lakes and more.
        </h3>
        <section className="spot-index">
          {this.allSurfSpots()}
        </section>

      </div>
    );
  }

  allSurfSpots() {
    const keys = Object.keys(this.props.spots);
    const spots = keys.map(key => {
      return this.props.spots[key];
    });
    return spots.map((spot, idx) => <QuickShowContainer spot={spot} key={idx} />);
  }

  componentDidMount() {
    this.props.getSurfSpots("Los Angeles");
  }
}
export default SurfSpotsIndex;
