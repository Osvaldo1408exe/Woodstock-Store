import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './style.css';

export function Header() {
    const [menuAberto, setMenuAberto] = useState(false);

    const alternarMenu = () => {
        setMenuAberto(!menuAberto);
    };

    return (
        <header>
            <div className="header-container">
                <div className="logoContainer">
                    <img src="public/logo.svg" alt="logo" className="logo" />
                    <h1>Woodstock Store</h1>
                </div>

                 <div className="menu-icon" onClick={alternarMenu}>
                    <FontAwesomeIcon icon={menuAberto ? faTimes : faBars} />
                </div>

                 <div className={menuAberto ? 'dropdown-menu active' : 'dropdown-menu'}>
                    <ul className="list-pages">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Products</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                    <ul className="list-user">
                        <li><a href="#">Login</a></li>
                        <li><a href="#">Register</a></li>
                    </ul>
                </div>
            </div>
        </header>
    );
}
