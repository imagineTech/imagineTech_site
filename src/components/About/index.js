import React from 'react';
import { Container, Row, Col } from 'reactstrap';

class About extends React.Component {
    render() {
        return (
            <div>
            <div style={{backgroundImage:`url('https://picsum.photos/1500')`}}>
                <Container>
                    <h1>About Us</h1>
                </Container>
            </div>
            <div>
                <Container>
                    <Row>
                        <Col>
                            <h3>Mission</h3>
                            <p>To help businesses thrive in an ever-evolving competitive market, through dynamic cutting edge technologies, and strategies, at affordable rates.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h3>Vision</h3>
                            <p>To become a self sustaining organization that provides solutions to the world's biggest  problems, through engineering and advanced technologies.</p>
                        </Col>
                    </Row>
                </Container>
            </div>
            </div>
        )
    }
}

export default About;
