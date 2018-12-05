import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../repeats/Header';
import Home from '../components/Home';
import Team from '../components/Team';
import Portfolio from '../components/Portfolio';
import Services from '../components/Services';
import Contact from '../components/Contact';
import './Root.css';

class ScreenRoot extends Component {
    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/team" component={Team} />
                    <Route path="/portfolio" component={Portfolio} />
                    <Route path="/services" component={Services} />
                    <Route path="/contact" component={Contact} />
                </Switch>
            </div>

        )
    }
}

export default ScreenRoot;
