import React from 'react';
import {Row,Col} from 'reactstrap';
import styled from 'styled-components';

const headingStyles = {
    
    fontFamily:'Lato'
}


const Frontend = () => {
    return (
        <div>
        <h2 className="mt-4 mb-4 pb-4 text-center shadow" style={headingStyles}>Web Development</h2>
        <Row>
            <div className="d-flex">
                <Col lg="8">
                    <h1 className="text-shadowed__big">Future of Frontend Technologies</h1>
                    <p>Databases are at the core of every application. Yet, database access, migrations and data management workflows still are huge time sinks for developers. Our mission is to build the right abstractions and tools to save development time that should be spent on building valued-adding features.</p>
                </Col>
                <Col lg="4">
                    <img src={`../assets/img/it.png`} width="50%"/>
                </Col>
                
            </div>
            
            
        </Row>
        <Row>
                <div className="d-flex">
                    <Col lg="4">
                        
                        <h3 className="text-shadowed__small">Frontend</h3>
                        <div className="d-flex align-items-center">
                            <img src={`../assets/img/graphql.svg`} width="50px" className="mr-1"/>
                            <img src={`../assets/img/node.svg`} width="50px" className="mr-1"/>
                            <img src={`../assets/img/react.svg`} width="50px"/>
                        </div>
                        <p className="text-shadowed">Databases are at the core of every application. Yet, database access, migrations and data management workflows still are huge time sinks for developers. Our mission is to build the right abstractions and tools to save development time that should be spent on building valued-adding features.</p>
                    </Col>
                    <Col lg="4">
                        
                        <h3 className="text-shadowed__small">Databases</h3>
                        <div className="d-flex align-items-center">
                            <img src={`../assets/img/graphql.svg`} width="50px" className="mr-1"/>
                            <img src={`../assets/img/node.svg`} width="50px" className="mr-1"/>
                            <img src={`../assets/img/react.svg`} width="50px"/>
                        </div>
                        <p className="text-shadowed">Databases are at the core of every application. Yet, database access, migrations and data management workflows still are huge time sinks for developers. Our mission is to build the right abstractions and tools to save development time that should be spent on building valued-adding features.</p>
                    </Col>
                    <Col lg="4">
                        
                        <h3 className="text-shadowed__small">APIs</h3>
                        <div className="d-flex align-items-center">
                            <img src={`../assets/img/graphql.svg`} width="50px" className="mr-1"/>
                            <img src={`../assets/img/node.svg`} width="50px" className="mr-1"/>
                            <img src={`../assets/img/react.svg`} width="50px"/>
                        </div>
                        <p className="text-shadowed">Databases are at the core of every application. Yet, database access, migrations and data management workflows still are huge time sinks for developers. Our mission is to build the right abstractions and tools to save development time that should be spent on building valued-adding features.</p>
                    </Col>
                    </div>
                </Row>
                
        </div>
    )
}

export default Frontend;