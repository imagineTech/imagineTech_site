import React from 'react';

const TeamMember = ({ member }) => {
    return (
        <div>
            <h2>{member.name}</h2>
            <p>{member.role}</p>
        </div>
    );
}

export default TeamMember;