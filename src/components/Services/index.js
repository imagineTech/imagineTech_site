import React, { Component } from 'react';
import FrontEnd from './Frontend';
import BackEnd from './Backend';

class ServicesContainer extends Component {
    render() {
        return( 
            <div>
                <FrontEnd />
                <BackEnd />
            </div>
        )
    }
} 

export default ServicesContainer;