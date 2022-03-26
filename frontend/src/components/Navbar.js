import React from 'react';
import mobile_menu from '../assets/icon-hamburger.svg';
import '../App.css';

const Navbar = ({ accounts, setAccounts }) => {
    const isConnected = Boolean(accounts[0]);

    async function connectAccount() {
        if (window.ethereum) {
            const accounts = await window.ethereum.request(
                {
                    method: "eth_requestAccounts",
                }
            );
            setAccounts(accounts);
        }
    }

    // menu mobile display
    const toggle = () => {
        const menu = document.getElementById('mobile-menu');
        const navUl = document.getElementById('login');
        menu.addEventListener('click', (e) => {
            e.preventDefault();
            navUl.classList.toggle('show');
        })
    }

    return (
        <div className='nav'>
            <h1 className="name">Sunset</h1>
            <button className="menu" id="mobile-menu" onClick={toggle}>
                <img src={mobile_menu} alt="hamburger-menu" />
            </button>
            <ul className="nav-ul" id="login">
                {isConnected ? (
                    <button className='btn-login'>Connected</button>
                ) : (
                    <button className="btn-login" onClick={connectAccount}>Connect to Wallet</button>
                )}
            </ul>
        </div>
    )
}

export default Navbar;