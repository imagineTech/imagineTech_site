import React, { Component } from 'react';
import Header from '../components/Header';
import Home from '../components/Home';
import Footer from '../components/Footer';


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