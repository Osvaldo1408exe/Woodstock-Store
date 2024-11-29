import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Styles from './Component.module.css';

export function Header() {
    const [menuAberto, setMenuAberto] = useState(false);

    const alternarMenu = () => {
        setMenuAberto(!menuAberto);
    };

    return (
        <header>
            <nav className={Styles.navbar}>
                <div className={Styles.navbarLogo}>
                    <img src="/Logo.svg" alt="WoodStock Logo" className={Styles.logo} />
                    <span>WoodStock</span>
                </div>
                <ul className={menuAberto ? `${Styles.navbarMenu} ${Styles.active}` : Styles.navbarMenu}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <div className={Styles.navbarButtons}>
                    <button className={`${Styles.btn} ${Styles.login}`}>Login</button>
                    <button className={`${Styles.btn} ${Styles.register}`}>Register</button>
                </div>
                <button onClick={alternarMenu} className={Styles.menuIcon}>
                    <FontAwesomeIcon icon={menuAberto ? faTimes : faBars} />
                </button>
            </nav>
        </header>
    );
}
