import React, { Component } from 'react';
import TeamList from './List';

class TeamContainer extends Component {

    state = {
        members: [
            { id: 1, name: "Bob Wilson", role: "CEO" },
            { id: 2, name: "Kyile Globe", role: "CFO" },
            { id: 3, name: "Oscar Swanson", role: "COO" }
        ]
    }

    render() {
        const { members } = this.state;
        return (
            <div>
                <TeamList members={members}/>
            </div>
        );
    }
}

export default TeamContainer;