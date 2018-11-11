import React, { Component } from 'react';
import Header from './Header';
import Home from '../components/Home';
import Footer from './Footer';


class ScreenRoot extends Component {
    render() {
        return(
            <div>
                <Header />
                <Home />
                <Footer />
            </div>
            
        )
    }
}
 
export default ScreenRoot;