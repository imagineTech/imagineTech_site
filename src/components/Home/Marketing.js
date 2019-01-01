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

const Marketing = () => {
    return (
        <Row style={{...rowStyles}}>
            <Col className="p-4 offset-lg-6 offset-md-6" xs="12" sm="12" md="12" lg="12" xl="6">
                <Heading className="animated pulse" bcolor="#004191">Marketing and Research</Heading>
                <p className="para animated pulse">
                    Simply put, the quality of your marketing determines a huge portion of your online success. Even more important than a well-developed website, is a solid marketing strategy. Our marketing team does the research to help you determine how to reach a greater number of potential clients. 
                    For example, our team can tell you that the word “services” which you planned on adding to your super cool website only has a search volume of 400 searches per month, but the word “service” has 2,400 searches per month. That’s literally a two thousand potential client difference! In just one letter! 
                    Now imagine the difference in over 100 well placed keywords, all throughout your website.
                </p>
                
            </Col>
            
        </Row>
    )
}

export default Marketing;
