import React, { Component } from 'react';
import {Container} from 'reactstrap';
import FrontEnd from './Frontend';
import BackEnd from './Backend';

class ServicesContainer extends Component {
    render() {
        return( 
            <div>
                <div style={{backgroundColor:'#f4f4f4',padding:'1em',color:'black'}}>
                    <Container>
                        <FrontEnd/>
                    </Container>
                </div>
                <div style={{backgroundColor:'#f4f4f4',padding:'1em',color:'black'}}>
                    <Container>
                        <BackEnd/>
                    </Container>
                </div>
            </div>
        )
    }
} 

export default ServicesContainer;