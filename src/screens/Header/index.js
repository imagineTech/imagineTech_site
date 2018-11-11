import React, { Component } from 'react';
import HeaderLogo from './Logo';
import HeaderInfo from './Info';

class HeaderContainer extends Component {
    render() {
        return (
            <div class="container">
            <div class="row header">
                <HeaderLogo/>
                <HeaderInfo/>
            </div>
            </div>
        );
    }
}

export default HeaderContainer;