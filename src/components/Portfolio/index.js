import React, { Component } from 'react';
import PortfolioList from './List';
import { Container, Row } from 'reactstrap';

import Heading from '../Home/repeats/Heading';

class PortfolioContainer extends Component {
    state = {
        projects: [
            { id: 1, name: "United Trucking Service", desc: "A trucking service company site.", img: "https://picsum.photos/300" },
            { id: 2, name: "Distribution CRM", desc: "CRM application.", img: "https://picsum.photos/300" },
            { id: 3, name: "ImagineTech Site", desc: "Official website of our company.", img: "https://picsum.photos/300" }
        ]
    }

    render() {
        const { projects } = this.state;
        return (
            <div style={{backgroundColor:'#f4f4f4',padding:'1em',color:'black'}}>
            <Container>
                <h1 className="pb-4 text-center text-dark border-bottom" style={{fontFamily:'Lato',fontWeight:'100'}}>Projects Undergoing</h1>
                <Row>
                <PortfolioList projects={projects} />
                </Row>
            </Container>
            </div>
        );
    }
}

export default PortfolioContainer;
