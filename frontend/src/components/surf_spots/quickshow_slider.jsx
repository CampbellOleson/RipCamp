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
    const temp = length - 1;
    if ((prevPhoto - 1) === -1){
      this.setState({ selectedPhoto: temp % length})
    }else{
      this.setState({ selectedPhoto: Math.abs(prevPhoto - 1) % length }
      )
    }
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
              alt=""
            />
          </div>
          <div className="slider_button" onClick={this.forwardPhoto}>
            <img
              className="slider_button_photo"
              src="https://ripcamp-dev.s3-us-west-1.amazonaws.com/forward_arrow.png"
              alt=""
            />
          </div>
        </div>
      </div>
    );
  }
}

export default QuickShowSlider;
