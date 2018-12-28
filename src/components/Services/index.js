import React, { Component } from 'react';
import {Container} from 'reactstrap';
import FrontEnd from './Frontend';
import BackEnd from './Backend';

class ServicesContainer extends Component {
    render() {
        return( 
            <div>
                <div style={{backgroundColor:'#1a6ccc',padding:'1em'}}>
                    <Container>
                        <FrontEnd/>
                    </Container>
                </div>
                <div style={{backgroundColor:'#3398ff',padding:'1em'}}>
                    <Container>
                        <BackEnd/>
                    </Container>
                </div>
            </div>
        )
    }
} 

export default ServicesContainer;