import React from 'react';
import './Logo.css';
import pawprint from "./pawprint.png";

class Logo extends React.Component{ 
    render() {
        return (
            <header>
                <img alt="pawprint" className="logo" src={pawprint} />
                    <span>Pet Food Pantry</span>
            </header>
        )
    }
}

export default Logo;