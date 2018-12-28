import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

const Footer = () => {
    return (
        <Row>
            <Col className="text-center mt-3" style={{fontFamily:'Lato',fontWeight: 300}}>
            <h4>Have a great idea and need our help?</h4>
            <Link to="/contact"><h1>Contact us today</h1></Link>
            </Col>
        </Row>

    )
}

export default Footer;
