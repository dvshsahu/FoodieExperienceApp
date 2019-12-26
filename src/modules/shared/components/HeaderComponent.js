import React from 'react';
import '../styles/SharedStyles.css';

const HeaderComponent = () => {
    return (
        <header className="header sticky-header">
            <a href="#default" className="logo">LOGO</a>
            <div className="">
                <a className="active" href="#home">ABOUT</a>
                <a href="#contact">COMMUNITY</a>
                <a href="#about">LOCATION</a>
                <a href="#about">OUR MENU</a>
                <a href="#about">RECIPES</a>
            </div>
            <div className="header-right">
                <a href="#about">CONTACT</a>
                <a href="#about">LOGIN</a>
            </div>
        </header>
    )
}

export default HeaderComponent;