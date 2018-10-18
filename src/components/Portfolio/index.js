import React, { Component } from 'react';
import PortfolioList from './List';

class PortfolioContainer extends Component {
    state = {
        projects: [
            { id: 1, name: "Project Cat", desc: "A project about a cat" },
            { id: 2, name: "Project Dog", desc: "A project about a dog" },
            { id: 3, name: "Project Pig", desc: "A project about a pig" }
        ]
    }

    render() {
        const { projects } = this.state;
        return (
            <div>
                <PortfolioList projects={projects} />
            </div>
        );
    }
}

export default PortfolioContainer;