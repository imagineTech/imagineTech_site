import React, { Component } from 'react';
import TeamList from './List';

class TeamContainer extends Component {

    state = {
        memebers: [
            { id: 1, name: "Bob Wilson", role: "CEO" },
            { id: 2, name: "Kyile Globe", role: "CFO" },
            { id: 3, name: "Oscar Swanson", role: "COO" }
        ]
    }

    render() {
        const { memebers } = this.state;
        return (
            <div>
                <TeamList memebers={memebers}/>
            </div>
        );
    }
}

export default TeamContainer;