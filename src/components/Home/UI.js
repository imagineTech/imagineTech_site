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

const UI = () => {
    return (
        <Row style={{...rowStyles}}>
            <Col className="p-4 offset-md-6 offset-lg-6" xs="12" sm="12" md="12" lg="12" xl="6">
                    <Heading className="animated pulse" bcolor="#004191">UX/UI Design</Heading>
                    <p className="para animated pulse">
                        A UX designer will consider the Why, What and How of product use. The Why involves the users’ motivations for adopting a product, whether they relate to it, or to the values and views associated with the ownership and use of the product. 
                        The What addresses the things people can do with a product - its functionality. 
                        The How relates to the design of functionality in an accessible and aesthetically pleasant way. 
                        <p>UX designers start with the Why before determining the What and then, finally, the How in order to create products that users can form meaningful experiences with. 
                            In software designs, designers must ensure the product’s substance comes through an existing device and offers a seamless, fluid experience. 
                        </p>
                    </p>
            </Col>
        </Row>
    )
}

export default UI;
//d-flex align-items-center flex-column justify-content-center 