import React from 'react';
import { useMoralis } from 'react-moralis';
import './App.css';
import icon from './assets/icon.svg';
import mobile_menu from './assets/icon-hamburger.svg';
import NFTImage from './assets/sunset.jpg';

const App = () => {

  const { authenticate } = useMoralis();

  // increase and decrease function
  const value = document.getElementById('value');
  const price = document.getElementById('price');
  let p = 1.1;

  const increase = () => {
    document.getElementById('increase').addEventListener("click", (e) => {
      e.preventDefault();
      if (parseInt(value.innerHTML) < 5) {
        let num = parseInt(value.innerHTML);
        value.innerHTML = num + 1;
        price.innerHTML = p * value.innerHTML;
      }
    })
  }

  const decrease = () => {
    document.getElementById('decrease').addEventListener("click", (e) => {
      e.preventDefault();
      if (parseInt(value.innerHTML) > 1) {
        let num = parseInt(value.innerHTML);
        value.innerHTML = num - 1;
        price.innerHTML = p * value.innerHTML;
      }
    })
  }

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
    <div className="container">
      <nav>
        <h1 className="name">Burning Echidna</h1>
        <button className="menu" id="mobile-menu" onClick={toggle}>
          <img src={mobile_menu} alt="hamburger-menu" />
        </button>
        <ul className="nav-ul" id="login">
          <button className="btn-login" onClick={() => authenticate()}>Connect to Wallet</button>
        </ul>
      </nav>

      <main>
        <div className="flex-box">
          <div className="card">
            <img src={NFTImage} alt="NFT" className="nft" width="100" height="100" />
            <div className="text">
              NFts by <span className="name">Burning Echidna</span>
            </div>
          </div>
          <div className="price">
            <button id="decrease" onClick={decrease}>-</button>
            <span id="value">1</span>
            <button id="increase" onClick={increase}>+</button>
            <button className="mint">Mint</button>
            <img src={icon} alt="" className="logo" />
            <span id="price">1.1</span>
          </div>
        </div>

        <div className="time">
          <span className="time-span">
            <div className="time-div">
              <b>00</b>
            </div>
            <span>
              Days
            </span>
          </span>
          <span className="time-span">
            <div className="time-div">
              <b>00</b>
            </div>
            <span>
              Hours
            </span>
          </span>
          <span className="time-span">
            <div className="time-div">
              <b>00</b>
            </div>
            <span>
              Minutes
            </span>
          </span>
          <span className="time-span">
            <div className="time-div">
              <b>00</b>
            </div>
            <span>
              Seconds
            </span>
          </span>
        </div>
      </main>
    </div>
  );
}

export default App;
