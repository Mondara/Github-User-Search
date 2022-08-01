import React from 'react';
import './navbar.css';

import { ReactComponent as MoonSVG } from '../../assets/icon-moon.svg';
import { ReactComponent as SunSVG } from '../../assets/icon-sun.svg';

import { ThemeContext } from '../../theme/ThemeContext';


export function Navbar() {
    const { theme, toggleTheme} = React.useContext(ThemeContext);

    return (
        <div className="navbar">
            <h1 className="navbar-header">devfinder</h1>
            <button className="navbar-button" onClick={toggleTheme}>
                {theme === 'dark' ? <SunSVG /> : <MoonSVG />}
                <p>{theme === 'dark' ? 'Light' : 'Dark'} </p>
            </button>
        </div>
    )
}
