import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    state = {
        hamburger: false
    }
    handleToggle = () => {
        this.setState(state => ({ hamburger: !state.hamburger }))
    }
    render() {
        let { hamburger } = this.state;
        return (
            <div className="top">
            <header>
            <div className="logo"><img src={'../assets/Logo.png'} /></div>
            <div className="menu-collapse" onClick={this.handleToggle}>
                <div className="hamburger"></div>
                <div className="hamburger"></div>
                <div className="hamburger"></div>
            </div>
            
        </header>
        <div className={!!hamburger?"hamburger-menu animated bounceInDown":"menu"}>
        <ul>
                <li><i class="fab fa-houzz"></i><Link to="/">Home</Link></li>
                <li><i class="fas fa-male"></i><Link to="/team">Team</Link></li>
                <li><i class="fas fa-project-diagram"></i><Link to="/portfolio">Portfolio</Link></li>
                <li><i class="fab fa-servicestack"></i><Link to="/services">Services</Link></li>
                <li><i class="fab fa-contao"></i><Link to="/contact">Contact</Link></li>
            </ul>
            </div>
            </div>
        )
    }
}

export default Header;
