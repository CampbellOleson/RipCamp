import React from "react";

class QuickShowSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPhoto: 0
    };

    this.forwardPhoto = this.forwardPhoto.bind(this);
    this.backPhoto = this.backPhoto.bind(this);
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
    const photo = this.props.spot.photos[this.state.selectedPhoto];
    return (
      <div
        className="quickshow_photobar"
        style={{ backgroundImage: `url(${photo})` }}
      >
        <div className="slider_button_container">
          <div className="slider_button" onClick={this.backPhoto}>
            <img
              className="slider_button_photo"
              src="https://ripcamp-dev.s3-us-west-1.amazonaws.com/back_arrow.png"
            />
          </div>
          <div className="slider_button" onClick={this.forwardPhoto}>
            <img
              className="slider_button_photo"
              src="https://ripcamp-dev.s3-us-west-1.amazonaws.com/forward_arrow.png"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default QuickShowSlider;

// // <div className="quickshow_photobar">
//   {/* {props.spot.photos.map((p, idx) => {
//     <span className={`slider-image-${idx}`} />;
//   })} */}
//   <div
//     className="image-container"
//     // style={{ width: "90%" }} //`${100 * props.spot.photos.length}%`
//   >
//     {props.spot.photos.map(photo => {
//       return <img src={`${photo}`} className="slider-image" />;
//     })}
//   </div>
//   {/* <div className="slider-button-container" /> */}
// // </div>
