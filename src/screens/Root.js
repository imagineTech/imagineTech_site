import React, { Component } from 'react';
import Home from '../components/Home';
import Contact from '../components/Contact';

class ScreenRoot extends Component {
    render() {
        return(
            <div>
                <Home />
                <Contact />
            </div>
            
        )
    }
}

export default ScreenRoot;