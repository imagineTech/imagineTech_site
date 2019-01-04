import React from 'react';
import { Row, Col } from 'reactstrap';
import Heading from './repeats/Heading';
import Paragraph from './repeats/Paragraph';

const rowStyles = {
    backgroundImage: `url("../assets/img/backg.png")`,
    height: '473px',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
}

const SinglePage = () => {
    return (
        <Row style={{...rowStyles}}>
            <Col className="p-4 offset-md-6 offset-lg-6" xs="12" sm="12" md="12" lg="12" xl="6">
                    <Heading className="animated pulse" bcolor="#004191">Single Page React Apps</Heading>
                    <p className="para animated pulse">
                        These are not your typical websites. They’re single page React Apps. 
                        <p>React JS is a much faster, and more scalable technology, which translates to more SEO friendly websites (key for higher Google ranking), and it lays the foundation to improve technology to meet the demands of a growing client base. </p>
                        <p>Single page apps are also far more modern which tells your clients that your business is keeping up with technology trends, and thus can meet their growing tech needs.</p>
                    </p>
            </Col>
        </Row>
    )
}

export default SinglePage;
