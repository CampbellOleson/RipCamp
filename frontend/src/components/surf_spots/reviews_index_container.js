import { connect } from 'react-redux';
import { getReviews } from '../../actions/surf_spot_actions';
import Reviews from './reviews';

const mapStateToProps = (state, ownProps) => {
    return {
        reviews: Object.values(state.entities.reviews)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getReviews: () => dispatch(getReviews())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);