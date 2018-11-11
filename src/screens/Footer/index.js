import React, { Component } from 'react';
import FooterSocialInfo from './SocialInfo';
import FooterContactForm from './ContactForm';

class FooterContainer extends Component {
    render() {
        return(
            <div className="container">
            <div className="row">
                <FooterContactForm/>
            </div>
            <div className="row">
                <FooterSocialInfo/>
            </div>
        </div>
        );
    }
}

export default FooterContainer