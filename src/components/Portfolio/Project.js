import React from 'react';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay, Col } from 'reactstrap';
import {Link} from 'react-router-dom';

const PortfolioProject = ({ project }) => {
    return (
        <Col md="4" lg="3" sm="6" xs="12">
        <Link to="/">
        <div className="shadow" style={{padding:'1em'}}>
        <img src={project.img} width="100%"/>
        <h4 className="mt-1">{project.name}</h4>
        <p>{project.desc}</p>
        </div>
        </Link>
      {/*<Card className="mb-1 mt-1" inverse>
        <CardImg width="100%" src={project.img} alt="Card image cap" />
        <CardImgOverlay>
          <CardTitle>{project.name}</CardTitle>
          <CardText>{project.desc}</CardText>
          <CardText>
            <small className="text-muted">Last updated 3 mins ago</small>
          </CardText>
        </CardImgOverlay>
      </Card>*/}
    </Col>
    );
}

export default PortfolioProject;
