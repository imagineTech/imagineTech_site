import React from 'react';
import Member from './Member';

const List = ({ members }) => {
    return (
        <div>
            {members.map(member => {
                return <Member key={member.id} {...member} /> 
            })}
        </div>
    );
}

export default List;