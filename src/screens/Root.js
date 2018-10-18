import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import Team from '../components/Team';

class ScreenRoot extends Component {
    render() {
        return(
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/team" component={Team} />
            </Switch>
        )
    }
}

export default ScreenRoot;