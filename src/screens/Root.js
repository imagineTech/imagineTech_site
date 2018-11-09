import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../repeats/Header';
import Home from '../components/Home';
import Contact from '../components/Contact';

class ScreenRoot extends Component {
    render() {
        return(
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/contact" component={Contact} />
                </Switch>
            </div>
            
        )
    }
}

export default ScreenRoot;