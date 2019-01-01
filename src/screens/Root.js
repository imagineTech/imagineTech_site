import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from '../repeats/Header';
import Footer from '../repeats/Footer';
import Home from '../components/Home';
import Team from '../components/Team';
import Portfolio from '../components/Portfolio';
import Services from '../components/Services';
import Contact from '../components/Contact';
import About from '../components/About';

import './Root.css';

import styled from 'styled-components';

const Wrapper = styled.div `
margin: 0;
padding: 0;
background-color: #101022;
color: white;
font-family: 'PT Serif', serif;
`

class ScreenRoot extends Component {
    render() {
        return (
            <Wrapper>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/team" component={Team} />
                    <Route exact path="/portfolio" component={Portfolio} />
                    <Route exact path="/services" component={Services} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/about" component={About} />
                </Switch>
                <Footer />
            </Wrapper>

        )
    }
}

export default ScreenRoot;
