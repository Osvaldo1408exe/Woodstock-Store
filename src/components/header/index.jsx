import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartShopping, faTimes } from '@fortawesome/free-solid-svg-icons';
import Styles from './Component.module.css';
import {useCart} from '../../context/CartContext';
import { Link } from 'react-router-dom';

export default function Header() {
    const [menuAberto, setMenuAberto] = useState(false);

    const alternarMenu = () => {
        setMenuAberto(!menuAberto);
    };

    const { cart } = useCart();

    return (
        <header>
            <nav className={Styles.navbar}>
                <div className={Styles.navbarLogo}>
                    <img src="/Logo.svg" alt="WoodStock Logo" className={Styles.logo} />
                    <span>WoodStock</span>
                </div>
                <ul className={menuAberto ? `${Styles.navbarMenu} ${Styles.active}` : Styles.navbarMenu}>
                    <li><a href="/">Home</a></li>
                    <li><a href="/products">Products</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/Cart">Cart</a></li>
                </ul>
                <div className={Styles.navbarButtons}>
                    <div className={Styles.cart}>
                        <Link to="/Cart"><FontAwesomeIcon icon={faCartShopping} /> {cart.length}</Link>
                    </div>
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
