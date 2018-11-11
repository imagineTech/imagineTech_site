import React, { Component } from 'react';
import HomeCountdown from './Countdown';

class HomeContainer extends Component {
    render() {
        return(
            <div>
                <div className="coming-soon">
            <div className="inner-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <h2>Under Construction</h2>
                            <p>We are working very hard on the new version of our site. It will bring a lot of new features. Stay tuned!</p>
                            <div className="timer">
                                <div style={{fontSize:'3em'}}><HomeCountdown/></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            </div>
        )
    }
}

export default HomeContainer