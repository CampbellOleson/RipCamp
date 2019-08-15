import React from 'react';
import SurfMap from './surf_map';

class SurfSearch extends React.Component {

    render() {
        const {spots} = this.props;

        return (
            <div className="map-container">
                <SurfMap spots={spots}/>
            </div>
        );
    }
}

export default SurfSearch;