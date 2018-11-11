import React, { Component } from 'react';

class HeaderContainer extends Component {
    render() {
        return (
            <div class="container">
            <div class="row header">
                <div class="col-sm-4 logo">
                    <h1><a href="index.html">ImagineTech</a> <span>.</span></h1>
                </div>
                <div class="col-sm-8 call-us">
                    <p>Tel: <span>0039 123 45 789</span> | Skype: <span>info@imaginetech.net</span></p>
                </div>
            </div>
            </div>
        );
    }
}

export default HeaderContainer;