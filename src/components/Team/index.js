import React, { Component } from 'react';
import {Container} from 'reactstrap';
import TeamList from './List';

const headStyles = {
    backgroundColor:'rgb(26, 108, 204)',
    paddingTop:'1em',
    paddingBottom:'1em',
    borderBottom:'5px solid green',
    marginBottom:'1em',
    fontFamily:'Lato'}


class TeamContainer extends Component {

    state = {
        members: [
            { id: 1, name: "Bob Wilson", role: "CEO",img:"https://picsum.photos/300" },
            { id: 2, name: "Kyile Globe", role: "CFO",img:"https://picsum.photos/300" },
            { id: 3, name: "Oscar Swanson", role: "COO",img:"https://picsum.photos/300" },
            { id: 3, name: "Shubham Swanson", role: "COO",img:"https://picsum.photos/300" }
        ]
    }

    render() {
        const { members } = this.state;
        return (
            <div>
                <div style={headStyles}>
                    <h1 className="text-center">OUR TEAM</h1>
                </div>
            <Container>
                <TeamList members={members}/>
            </Container>
            </div>
        );
    }
}

export default TeamContainer;
