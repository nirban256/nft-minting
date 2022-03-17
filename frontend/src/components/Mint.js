import React, { useState } from 'react';
import '../App.css';
import icon from '../assets/icon.svg';
import NFTImage from '../assets/sunset.jpg';

const Mint = ({ authenticate }) => {

    const [mintAmount, setMintAmount] = useState();

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
        if (mintAmount <= 1) return;
        setMintAmount(mintAmount - 1);
    }

    return (
        <div>
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
        </div>
    )
}

export default Mint