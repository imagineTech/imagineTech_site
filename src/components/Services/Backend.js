import React from 'react';
import {Row,Col} from 'reactstrap';
import styled from 'styled-components';

const headingStyles = {
    borderBottom:'3px solid blue',
    fontFamily:'Lato'
}


const Backend = () => {
    return (
        <div className="shadow p-4 mt-3">
        
        <Row>
            <div className="d-flex">
                <Col lg="12">
                    <h1 className="text-shadowed__big">Future of backend</h1>
                    <p>NoSQL, NewSQL, BigData and counting.</p>
                </Col>
                
                
            </div>
            
            
        </Row>
        
        <Row>
                <div className="d-flex">
                    <Col lg="4">
                        
                        <h3 className="text-shadowed__small">NoSQL</h3>
                        <div className="d-flex align-items-center">
                            <img src={`../assets/img/graphql.svg`} width="50px" className="mr-1"/>
                            <img src={`../assets/img/node.svg`} width="50px" className="mr-1"/>
                            <img src={`../assets/img/react.svg`} width="50px"/>
                        </div>
                        <p>There are number of NoSQL databases available and we build web applications based on them. Now, no need to worry about scaling.</p>
                    </Col>
                    <Col lg="4">
                        
                        <h3 className="text-shadowed__small">BigData</h3>
                        <div className="d-flex align-items-center">
                            <img src={`../assets/img/graphql.svg`} width="50px" className="mr-1"/>
                            <img src={`../assets/img/node.svg`} width="50px" className="mr-1"/>
                            <img src={`../assets/img/react.svg`} width="50px"/>
                        </div>
                        <p>To manage trillions of bytes of data BigData concept is the king and yes we support that.</p>
                    </Col>
                    <Col lg="4">
                        
                        <h3 className="text-shadowed__small">APIs</h3>
                        <div className="d-flex align-items-center">
                            <img src={`../assets/img/graphql.svg`} width="50px" className="mr-1"/>
                            <img src={`../assets/img/node.svg`} width="50px" className="mr-1"/>
                            <img src={`../assets/img/react.svg`} width="50px"/>
                        </div>
                        <p>APIs are most powerful and the true power is not unleased yet, but they are the future of data piping. Gone are the days when MySQL, MongoDB etc on local computer was a thing.</p>
                    </Col>
                    </div>
                </Row>
        </div>
    )
}

export default Backend;