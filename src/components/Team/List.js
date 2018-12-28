import React from 'react';
import {Row} from 'reactstrap';
import TeamMember from './Member';

const TeamList = ({ members }) => {
    return (
        <Row>
            {members.map(member => {
                return <TeamMember key={member.id} member={member} /> 
            })}
        </Row>
    );
}

export default TeamList;