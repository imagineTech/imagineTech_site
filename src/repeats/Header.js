import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className="logo"><img src={'../assets/Logo.png'} /></div>
            <div className="menu">
                <Link to="/">Home</Link>
                <Link to="/team">Team</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/services">Services</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </header>
    )
}

export default Header;
