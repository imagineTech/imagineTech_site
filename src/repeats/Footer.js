import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col,Container,Nav,NavItem,NavLink } from 'reactstrap';

const Footer = () => {
    return (
        <div className="p-3 shadow pt-4">
        <Container>
        <Row>
            <Col lg="8">
            <h3>About</h3>
            <p>Imaginetech is a web designing/development company based on Utah, USA.</p>
            </Col>
            <Col lg="4">
                <form>
                  <div class="form-row">
                    <div class="col-8">
                      <input type="text" class="form-control" placeholder="email"/>
                    </div>
                    <div class="col-4">
                      <button type="submit" class="btn btn-primary mb-2">Subscribe</button>
                    </div>
                  </div>
                </form>
            </Col>
        </Row>
        <Row>
            {/*<Col className="text-center mt-3" style={{fontFamily:'Lato',fontWeight: 300}}>
            <h4>Have a great idea and need our help?</h4>
            <Link to="/contact"><h1>Contact us today</h1></Link>
            </Col>*/}
            <Col lg="8">
                <div className="d-flex align-items-center">
                <p style={{marginBottom:'0'}}>© 2019 ImagineTech, Inc. | </p> 
                <Nav>
                
                    <NavItem>
                        <NavLink>Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>Privacy Policy</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>Disclaimer</NavLink>
                    </NavItem>
                </Nav>
                </div>
                
            </Col>
            <Col lg="4">
            
            <Row className="d-flex flex-row-reverse">
                <nav className="nav mr-3">
                  <a className="nav-link active" href="#"><i class="fab fa-linkedin" style={{fontSize:'30px'}}></i></a>
                  <a className="nav-link" href="#"><i class="fab fa-github" style={{fontSize:'30px'}}></i></a>
                </nav>
            </Row>
               {/* <form class="form-inline">
                  <div class="form-group mb-2">
                    <input type="text" readonly class="form-control-plaintext" id="staticEmail2" value="email@example.com"/>
                  </div>
                  <div class="form-group mx-sm-3 mb-2">
                    <input type="password" class="form-control" id="inputPassword2" placeholder="Password"/>
                  </div>
                  <button type="submit" class="btn btn-primary mb-2">Confirm identity</button>
                </form>*/}
            </Col>
        </Row>
        </Container>
        </div>

    )
}

export default Footer;
