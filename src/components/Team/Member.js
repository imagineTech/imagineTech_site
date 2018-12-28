import React from 'react';
import {Col} from 'reactstrap';

const TeamMember = ({ member }) => {
    return (
        <Col lg="3" md="4" sm="6" xs="12">
            <img src={member.img} width="100%"/>
            <h4>{member.name}</h4>
            <p>{member.role}</p>
            <span className="mr-2"><a href="#"><i class="fab fa-github"></i></a></span>
            <span><a href="#"><i class="fab fa-linkedin"></i></a></span>
        </Col>
    );
}

export default TeamMember;