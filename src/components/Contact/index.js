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
            <div style={{backgroundColor:'#f4f4f4',padding:'1em',color:'black'}}>
            <Container>
                <Row>
                
                    <Col className="mt-4 single-shadowed" lg="6" style={{padding:'2em',backgroundColor:'#3398ff'}}>
                        <h3 style={{borderBottom:'1px dashed #ccc',paddingBottom:'10px',fontFamily:'Lato'}}>Send us your query</h3>
                        <ContactForm submit={this.handleSubmit} change={this.handleChange} />
                    </Col>
                    <Col className="mt-4 offset-lg-1" lg="5">
                        <Heading color="#3398ff">Contact Us</Heading>
                <p>Our team is always on the lookout for new partnership opportunities. Whether you want to talk web design, react, or marketing, drop us a line, we would love to hear from you!</p>
                
                    <div class="bd-example">
                      <address>
                        <strong>ImagineTech, Inc.</strong><br/>
                        1355 Market St, Suite 900<br/>
                        Salt Lake City, UT 84101<br/>
                        <abbr title="Phone">P:</abbr> (908) 546-0561
                      </address>
                    
                      <address>
                        <strong>Mail at:</strong><br/>
                        info@imaginetech.net
                      </address>
                    </div>
                    </Col>
                </Row>
            </Container>
            </div>
        )
    }
}

export default ContactContainer;
