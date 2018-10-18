import React from 'react';
import TeamMember from './Member';

const TeamList = ({ members }) => {
    return (
        <div>
            {members.map(member => {
                return <TeamMember key={member.id} member={member} /> 
            })}
        </div>
    );
}

export default TeamList;