import React from 'react';
import PortfolioProject from './Project';

const PortfolioList = ({ projects }) => {
    return (
        <div>
            {projects.map(project => {
                return <PortfolioProject key={project.id} project={project} />
            })}
        </div>
    );
}

export default PortfolioList;