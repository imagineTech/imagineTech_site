import React from 'react';
import PortfolioProject from './Project';
import { Row } from 'reactstrap';

const PortfolioList = ({ projects }) => {
    return (
        <Row>
            
             {projects.map(project => {
                 return <PortfolioProject key={project.id} project={project} />
             })} 
        
        </Row>
    );
}

export default PortfolioList;
