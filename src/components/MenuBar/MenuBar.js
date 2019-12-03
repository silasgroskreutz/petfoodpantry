import React from 'react';
import './MenuBar.css';
import pawprint from "./pawprint.png";

class MenuBar extends React.Component{ 
    render() {
        return (
            <header>
                <img alt="pawprint" className="logo" src={pawprint} />
                    <h1>Pet Food Pantry</h1>
            </header>
        )
    }
}

export default MenuBar;