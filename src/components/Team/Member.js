import React from 'react';
import {Col} from 'reactstrap';

const TeamMember = ({ member }) => {
    return (
        <Col lg="3" md="4" sm="6" xs="12" className="mb-3">
            <img src={member.img} width="100%" className="rounded"/>
            <h4>{member.name}</h4>
            <p>{member.role} {" | "}
            
            <span className="mr-2"><i class="fab fa-github text-dark"></i></span>
            <span><i class="fab fa-linkedin text-dark"></i></span>
            </p>
            
        </Col>
    );
}

export default TeamMember;