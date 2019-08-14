import QuickShow from "./quickshow";
import { connect } from "react-redux";
import { getSingleSurfSpot } from "../../actions/surf_spot_actions";

const mapDispatchToProps = dispatch => ({
  getSingleSurfSpot: spotId => dispatch(getSingleSurfSpot(spotId))
});

const QuickShowContainer = connect(
  null,
  mapDispatchToProps
)(QuickShow);

export default QuickShowContainer;
