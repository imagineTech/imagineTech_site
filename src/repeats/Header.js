import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <Link to="/">Home</Link>
            {' '}
            <Link to="/team">Team</Link>
            {' '}
            <Link to="/portfolio">Portfolio</Link>
            {' '}
            <Link to="/services">Services</Link>
            {' '}
            <Link to="/contact">Contact</Link>
        </header>
    )
}

export default Header;