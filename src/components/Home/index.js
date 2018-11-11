import React, { Component } from 'react';
import HomeContent from './Content';
import Countdown from './Countdown';
import Logo from './Logo';

class HomeContainer extends Component {
    render() {
        return(
            <div style={{display:'flex'}}>
                <div>
                    <Logo/>
                    <HomeContent />
                </div>
                <div>
                    <Countdown />
                </div>
            </div>
        )
    }
}

export default HomeContainer