import React, { Component } from 'react';
import Contact from '../Contact';
import FooterInfo from './Info';

class FooterContainer extends Component {
    render() {
        return(
            <div className="container">
            <div className="row">
                <div className="col-sm-12 subscribe">
                    <h3>Your suggestions means a lot</h3>
                    <p>Send us your query and we'll get you back ASAP</p>                    
                    <Contact/>
                </div>
            </div>
            <div className="row">
                <FooterInfo/>
            </div>
        </div>
        );
    }
}

export default FooterContainer