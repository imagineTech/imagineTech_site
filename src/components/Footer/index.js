import React, { Component } from 'react';
import Contact from '../Contact';

class FooterContainer extends Component {
    render() {
        return(
            <div className="container">
            <div className="row">
                <div className="col-sm-12 subscribe">
                    <h3>Your suggestions means a lot</h3>
                    <p>Send us your query and we'll get you back ASAP</p>                    
                    <Contact/>
                    <div className="success-message"></div>
                    <div className="error-message"></div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12 social">
                    <a href="#" data-toggle="tooltip" data-placement="top" title="Facebook"><i className="fa fa-facebook"></i></a>
                    <a href="#" data-toggle="tooltip" data-placement="top" title="Twitter"><i className="fa fa-twitter"></i></a>
                    <a href="#" data-toggle="tooltip" data-placement="top" title="Dribbble"><i className="fa fa-dribbble"></i></a>
                    <a href="#" data-toggle="tooltip" data-placement="top" title="Google Plus"><i className="fa fa-google-plus"></i></a>
                    <a href="#" data-toggle="tooltip" data-placement="top" title="Pinterest"><i className="fa fa-pinterest"></i></a>
                    <a href="#" data-toggle="tooltip" data-placement="top" title="Flickr"><i className="fa fa-flickr"></i></a>
                </div>
            </div>
        </div>
        );
    }
}

export default FooterContainer