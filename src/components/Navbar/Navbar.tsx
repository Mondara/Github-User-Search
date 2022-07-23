import React from 'react';
import './navbar.css';

export default function Navbar() {
    return (
        <div className="navbar">
            <h1 className="navbar-header">devfinder</h1>
            <button className="navbar-button">
                <img src="../../../public/assets/icon-moon.svg"/>
                <p>Dark</p>
            </button>
        </div>
    )
}
