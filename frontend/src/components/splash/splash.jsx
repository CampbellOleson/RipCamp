import React from 'react';
import SearchBar from "../searchbar/searchbar_container";
import { Link } from 'react-router-dom';

class Splash extends React.Component {
    

    render() {
        
        return (
            <div className="splash">
                <div className="surf-greeting">
                    <h1 className="surf-main-title">Everywhere you want to surf.</h1>
                    <h3>
                    Check out unique surfing experiences at over <strong>300,000</strong> beaches,
                    shores, ponds, seas, oceans, lakes and more.
                    </h3>
                </div>
                <SearchBar />

                <div className="discover">
                    <h3 id="discover-headline">Discover surfing...</h3>
                    
                    <div className="splash-spots">
                        <div className="splash-spot">
                            <Link to="/spots" className="splash-spot-img">
                                <img src="https://ripcamp-dev.s3-us-west-1.amazonaws.com/big_sur_surf.jpg" alt=""/>
                            </Link>
                            <div className="splash-details">
                                <Link to="/spots" className="splash-spot-name">Available Tonight</Link>
                                <p>Best options near me</p>
                            </div>
                        </div>
                        <div className="splash-spot">
                            <Link to="/spots" className="splash-spot-img">
                                <img src="https://ripcamp-dev.s3-us-west-1.amazonaws.com/riptide2.jpg" alt=""/>
                            </Link>
                            <div className="splash-details">
                                <Link to="/spots" className="splash-spot-name">Surf Today</Link>
                                <p>Best options near me</p>
                            </div>
                        </div>
                        <div className="splash-spot">
                            <Link to="/spots" className="splash-spot-img">
                                <img src="https://ripcamp-dev.s3-us-west-1.amazonaws.com/coral_reef2.jpg" alt=""/>
                            </Link>
                            <div className="splash-details">
                                <Link to="/spots" className="splash-spot-name">Nearby Surfing</Link>
                                <p>Best options near me</p>
                            </div>
                        </div>
                        <div className="splash-spot">
                            <Link to="/spots" className="splash-spot-img">
                                <img src="https://ripcamp-dev.s3-us-west-1.amazonaws.com/club_dolphin2.jpg" alt=""/>
                            </Link>
                            <div className="splash-details">
                                <Link to="/spots" className="splash-spot-name">Club Dolphin</Link>
                                <p>Indonesia</p>
                            </div>
                        </div>
                        <div className="splash-spot">
                            <Link to="/spots" className="splash-spot-img">
                                <img src="https://ripcamp-dev.s3-us-west-1.amazonaws.com/bootstrap_bill2.jpg" alt=""/>
                            </Link>
                            <div className="splash-details">
                                <Link to="/spots" className="splash-spot-name">Big Sur</Link>
                                <p>California</p>
                            </div>
                        </div>
                        <div className="splash-spot">
                            <Link to="/spots" className="splash-spot-img">
                                <img src="https://ripcamp-dev.s3-us-west-1.amazonaws.com/haleiwa2.jpg" alt=""/>
                            </Link>
                            <div className="splash-details">
                                <Link to="/spots" className="splash-spot-name">Santa Monica</Link>
                                <p>California</p>
                            </div>
                        </div>
                        <div className="splash-spot">
                            <Link to="/spots" className="splash-spot-img">
                                <img src="https://ripcamp-dev.s3-us-west-1.amazonaws.com/surfers_paradise2.jpg" alt=""/>
                            </Link>
                            <div className="splash-details">
                                <Link to="/spots" className="splash-spot-name">Surfer's Paradise</Link>
                                <p>Australia</p>
                            </div>
                        </div>
                        <div className="splash-spot">
                            <Link to="/spots" className="splash-spot-img">
                                <img src="https://ripcamp-dev.s3-us-west-1.amazonaws.com/nazare3.jpg" alt=""/>
                            </Link>
                            <div className="splash-details">
                                <Link to="/spots" className="splash-spot-name">Nazare</Link>
                                <p>Portugal</p>
                            </div>
                        </div>
                        <div className="splash-spot">
                            <Link to="/spots" className="splash-spot-img">
                                <img src="https://ripcamp-dev.s3-us-west-1.amazonaws.com/haleiwa3.jpeg" alt=""/>
                            </Link>
                            <div className="splash-details">
                                <Link to="/spots" className="splash-spot-name">Haleiwa</Link>
                                <p>Oahu</p>
                            </div>
                        </div>
                        

                    </div>
                </div>
            </div>
        )
    }
}

export default Splash;