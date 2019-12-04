import React from 'react';
import './MenuBar.css';
import pawprint from "./pawprint.png";

class MenuBar extends React.Component{ 
    render() {
        return (
            <header>
                <img alt="pawprint" className="logo" src={pawprint} />
                    <span>Pet Food Pantry</span>
            </header>
        )
    }
}

export default MenuBar;