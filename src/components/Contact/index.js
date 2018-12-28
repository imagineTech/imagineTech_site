import React, { Component } from 'react';
import { Container, Col, Row } from 'reactstrap';
import ContactForm from './Form';
import Heading from '../Home/repeats/Heading';

class ContactContainer extends Component {

    state = {
        local: {}
    }

    handleSubmit = e => {
        const { local } = this.state;
        const { input_one, input_two, input_three } = e.target;
        e.preventDefault();
        input_one.value = "";
        input_two.value = "";
        input_three.value = "";
        console.log(local)
    }

    handleChange = e => {
        const { local } = this.state;
        const { name, value } = e.target;
        this.setState({
            local: { ...local, [name]: value }
        })
    }

    render() {
        return (
            <Container>
                <Heading color="#28C76F">Contact Us</Heading>
                <p>Our team is always on the lookout for new partnership opportunities. Whether you want to talk web design, react, or marketing, drop us a line, we would love to hear from you!</p>
                <Row>
                    
                    <Col className="bg-secondary single-shadowed" style={{padding:'2em'}}>
                        <h3>Send us your query</h3>
                        <ContactForm submit={this.handleSubmit} change={this.handleChange} />
                    </Col>
                    <Col className="d-flex flex-column align-items-center">
                        <h3>Address</h3>
                        <p>356 Boulevard,<br/>
                        street no 4,<br/>
                        Ohio<br/>
                        USA</p>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default ContactContainer;
