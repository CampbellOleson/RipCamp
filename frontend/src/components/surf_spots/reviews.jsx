import React from 'react';
import { withRouter } from 'react-router-dom';

class Review extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            reviews: []
        }
    }

    componentWillMount() {
        this.props.getReviews();
    }

    componentWillReceiveProps(newState) {
        this.setState({ reviews: newState.reviews });
    }

    render() {
        if (this.state.reviews.length === 0) {
            return (<div>There are no Reviews</div>)
        } else {
            return (
                <div>
                    <h2>All Reviews</h2>
                    {this.state.reviews.map(review => (
                        {review}
                    ))}
                </div>
            );
        }
    }
}
export default withRouter(Review);
