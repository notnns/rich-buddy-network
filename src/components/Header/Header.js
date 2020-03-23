import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className="onTop">
            <div className="header">
                <img src={logo} alt="" />
            </div>

            <div>
                <nav>
                    <a href="/Home">Home</a>
                    <a href="/Network">Network</a>
                    <a href="/About">About Us</a>
                </nav>
            </div>

        </div>
    );
};

export default Header;