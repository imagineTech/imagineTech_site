import React from 'react';
import {Row,Col} from 'reactstrap';
import styled from 'styled-components';

const headingStyles = {
    fontFamily:'Lato',
    fontWeight:'700',
    color:'#101022'
}


const Frontend = () => {
    return (
        <div className="shadow p-4">
        <Row>
            <div className="d-flex">
                <Col lg="12">
                    <h1 className="text-shadowed__big">Future of frontend</h1>
                    <p>React, Vue, Svelte, Angular, RxJS and counting.</p>
                </Col>
            </div>
            
            
        </Row>
        <Row>
                <div className="d-flex">
                    <Col lg="4">
                        
                        <h3 className="text-shadowed__small">React+graphql</h3>
                        <div className="d-flex align-items-center">
                            <img src={`../assets/img/graphql.svg`} width="50px" className="mr-1"/>
                            <img src={`../assets/img/node.svg`} width="50px" className="mr-1"/>
                            <img src={`../assets/img/react.svg`} width="50px"/>
                        </div>
                        <p>React and Graphql can be perfect combo for your next awesome web application. With the blazingly fast React framework and graphql server we create real time web applications.</p>
                    </Col>
                    <Col lg="4">
                        
                        <h3 className="text-shadowed__small">Vue</h3>
                        <div className="d-flex align-items-center">
                            <img src={`../assets/img/graphql.svg`} width="50px" className="mr-1"/>
                            <img src={`../assets/img/node.svg`} width="50px" className="mr-1"/>
                        </div>
                        <p>Vue is one of the masters of front-end frameworks. It supports modern frontend techniques as first class feature.</p>
                    </Col>
                    <Col lg="4">
                        
                        <h3 className="text-shadowed__small">React+serverless backend</h3>
                        <div className="d-flex align-items-center">
                            <img src={`../assets/img/graphql.svg`} width="50px" className="mr-1"/>
                            <img src={`../assets/img/node.svg`} width="50px" className="mr-1"/>
                            <img src={`../assets/img/react.svg`} width="50px"/>
                        </div>
                        <p>If you are worried about scaling, deploy your application to AWS.</p>
                    </Col>
                    </div>
                </Row>
                
        </div>
    )
}

export default Frontend;