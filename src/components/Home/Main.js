import React from 'react';
import { Row, Col } from 'reactstrap';

const rowStyles = {
    backgroundImage: `url("../assets/img/backg.png")`,
    height: '473px',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
}

const Main = () => {
    return (
        <Row style={{...rowStyles}}>
            <Col className="d-flex align-items-center flex-column justify-content-center" xs="12" sm="12" md="12" lg="12" xl="12">
                <h1 className="text-secondary">Imagine.Believe.Create</h1>
            </Col>
        </Row>
    )
}

export default Main;
