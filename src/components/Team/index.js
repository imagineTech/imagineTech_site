import React, { Component } from 'react';
import {Container} from 'reactstrap';
import TeamList from './List';

// const headStyles = {
//     backgroundColor:'rgb(26, 108, 204)',
//     paddingTop:'1em',
//     paddingBottom:'1em',
//     borderBottom:'5px solid green',
//     marginBottom:'1em',
//     fontFamily:'Lato'}


class TeamContainer extends Component {

    state = {
        members: [
            { id: 1, name: "Jahaziel Vazquez", role: "CEO",img:"https://randomuser.me/api/portraits/thumb/men/65.jpg" }
        ]
    }

    render() {
        const { members } = this.state;
        return (
            <div style={{backgroundColor:'#f4f4f4'}}>
                <Container>
                    <h1 className="text-center text-dark p-3 border-bottom" style={{fontWeight:'100',fontFamily:'Lato'}}>OUR TEAM</h1>
                </Container>
            <Container>
                <TeamList members={members}/>
            </Container>
            </div>
        );
    }
}

export default TeamContainer;
