import React from 'react';
import { Row, Col, Container } from 'reactstrap';

// Bits and pieces of this (Content) component
import ContentMarketing from './Marketing';
import ContentSinglePage from './SinglePage';
import ContentUI from './UI';
import ContentBackend from './Backend';
import ContentMain from './Main';

const Image = ({ src, text, choose, val }) => {
    return (
        <Row>
        <Col className="d-flex flex-column align-items-center justify-content-center" onClick={choose(val)}>
        <img src={src} width="50%" className="pointer"/>
        <p className="mt-1 pointer">{text}</p>
        </Col>
    </Row>
    )
}

const rowStyles = {
    backgroundImage: `url("../assets/img/home.jpeg")`,
    height: '400px',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
}

const Content = ({ choose, marketing, react, ui, backend }) => {
    return (
        <div>
        <div className="mb-3" style={rowStyles}>
        
            {
                
                marketing?<ContentMarketing/>:(
                    react?<ContentSinglePage/>:(
                        ui?<ContentUI/>:(
                            backend?<ContentBackend/>:<ContentMain/>
                        )
                    )
                )
                
            }
        </div>
        <Container>
            <Row>
                <Col xs="12" md="3" sm="6" className="d-flex justify-content-center align-items-center">
                    <Image 
                    src={`../assets/img/hex.png`} 
                    text="Marketing and Research      "
                    choose={choose}
                    val="marketing"
                    />
                </Col>
                <Col xs="12" md="3" sm="6" className="d-flex justify-content-center align-items-center">
                    <Image 
                    src={`../assets/img/hex.png`} 
                    text="Single Page React Apps"
                    choose={choose}
                    val="react"
                    />
                </Col>
                <Col xs="12" md="3" sm="6" className="d-flex justify-content-center align-items-center">
                    <Image 
                    src={`../assets/img/hex.png`} 
                    text="UX/UI Design"
                    choose={choose}
                    val="ui"
                    />
                </Col>
                <Col xs="12" md="3" sm="6" className="d-flex justify-content-center align-items-center">
                    <Image 
                    src={`../assets/img/hex.png`} 
                    text="Backend Technologies"
                    choose={choose}
                    val="backend"
                    />
                </Col>
            </Row>
        </Container>
        </div>
    )
}

export default Content;
