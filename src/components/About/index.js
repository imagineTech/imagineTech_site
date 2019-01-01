import React from 'react';
import { Container, Row, Col } from 'reactstrap';

class About extends React.Component {
    render() {
        return (
            <div style={{backgroundColor:'#f4f4f4'}}>
            
                <Container>
                    <h1 className="text-dark pt-3 border-bottom" style={{fontFamily:'Lato',fontWeight:'100'}}>About Us</h1>
                </Container>
            
            <div className="text-dark">
                <Container>
                    <Row>
                        <Col>
                            <h3>Mission</h3>
                            <p>To help businesses thrive in an ever-evolving competitive market, through dynamic cutting edge technologies, and strategies, at affordable rates.</p>
                        </Col>
                        <Col>
                            <h3>Vision</h3>
                            <p>To become a self sustaining organization that provides solutions to the world's biggest  problems, through engineering and advanced technologies.</p>
                        </Col>
                    </Row>
                    <Row>
                        <img src="//logo.clearbit.com/reactjstutorial.net?size=80&greyscale=true" class="rounded float-left" alt="ReactJS"/>
                        <img src="//logo.clearbit.com/nodejs.org?size=80&greyscale=true" class="rounded float-right" alt="NodeJS"/>
                    </Row>
                </Container>
            </div>
            </div>
        )
    }
}

export default About;
