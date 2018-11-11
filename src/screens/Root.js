import React, { Component } from 'react';
import Header from '../components/Header';
import Home from '../components/Home';
import Contact from '../components/Contact';

class ScreenRoot extends Component {
    render() {
        return(
            <div>
                <Header />
                <Home />
                <Contact />
            </div>
            
        )
    }
}
 
export default ScreenRoot;