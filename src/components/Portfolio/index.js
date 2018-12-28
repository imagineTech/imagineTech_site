import React, { Component } from 'react';
import PortfolioList from './List';
import { Container, Row } from 'reactstrap';

import Heading from '../Home/repeats/Heading';

class PortfolioContainer extends Component {
    state = {
        projects: [
            { id: 1, name: "Project Cat", desc: "A project about a cat", img: "https://picsum.photos/300" },
            { id: 2, name: "Project Dog", desc: "A project about a dog", img: "https://picsum.photos/300" },
            { id: 3, name: "Project Pig", desc: "A project about a pig", img: "https://picsum.photos/300" },
            { id: 4, name: "Project Piggyback", desc: "A project about a pig", img: "https://picsum.photos/300" }
        ]
    }

    render() {
        const { projects } = this.state;
        return (
            <Container>
                <h1 className="pb-4 text-center shadow">Projects Undergoing</h1>
                <Row>
                <PortfolioList projects={projects} />
                </Row>
            </Container>
        );
    }
}

export default PortfolioContainer;
