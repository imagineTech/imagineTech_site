import React from 'react';

const PortfolioProject = ({ project }) => {
    return (
        <div>
            <h2>{project.name}</h2>
            <p>{project.desc}</p>
        </div>
    );
}

export default PortfolioProject;