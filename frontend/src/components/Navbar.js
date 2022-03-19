import React from 'react';
import mobile_menu from '../assets/icon-hamburger.svg';
import '../App.css';

const Navbar = ({ authenticate }) => {

    // menu mobile display
    const menu = document.getElementById('mobile-menu');
    const navUl = document.getElementById('login');

    const toggle = () => {
        menu.addEventListener('click', (e) => {
            e.preventDefault();
            navUl.classList.toggle('show');
        })
    }

    return (
        <div>
            <h1 className="name">Sunset</h1>
            <button className="menu" id="mobile-menu" onClick={toggle}>
                <img src={mobile_menu} alt="hamburger-menu" />
            </button>
            <ul className="nav-ul" id="login">
                <button className="btn-login" onClick={() => authenticate()}>Connect to Wallet</button>
            </ul>
        </div>
    )
}

export default Navbar;