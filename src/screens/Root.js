import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import Team from '../components/Team';
import Portfolio from '../components/Portfolio';

class ScreenRoot extends Component {
    render() {
        return(
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/team" component={Team} />
                <Route path="/portfolio" component={Portfolio} />
            </Switch>
        )
    }
}

export default ScreenRoot;