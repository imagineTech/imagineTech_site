import React from 'react';
import {Row,Col} from 'reactstrap';
import styled from 'styled-components';

const headingStyles = {
    borderBottom:'3px solid blue',
    fontFamily:'Lato'
}


const Backend = () => {
    return (
        <div>
        
        <Row>
            <div className="d-flex">
                <Col lg="4">
                    <img src={`../assets/img/it.png`} width="50%"/>
                </Col>
                <Col lg="8">
                    <h1 className="text-shadowed__big">Future of Backend Technologies</h1>
                    <p className="text-shadowed">Databases are at the core of every application. Yet, database access, migrations and data management workflows still are huge time sinks for developers. Our mission is to build the right abstractions and tools to save development time that should be spent on building valued-adding features.</p>
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

export default Backend;