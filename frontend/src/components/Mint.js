import React, { useState } from 'react';
import { ethers, BigNumber, Contract } from 'ethers';
import AvalancheNFT from "../AvalancheNFT.json";
import icon from '../assets/icon.svg';
import NFTImage from '../assets/sunset.jpg';

const avalancheNFTAddress = "0xe1975D27C0Edcb80431F5E384D888C28ff5e609d";

const Mint = ({ accounts, setAccounts }) => {

    const [mintAmount, setMintAmount] = useState(1);
    const isConnected = Boolean(accounts[0]);
    const mintPrice = 0.75;

    async function handleMint() {
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                avalancheNFTAddress,
                AvalancheNFT.abi,
                signer
            );
            try {
                const response = await contract.mint(BigNumber.from(mintAmount), {
                    value: ethers.utils.parseEther((0.75 * mintAmount).toString()),
                });
                console.log("response: ", response);
            } catch (err) {
                console.log("error: ", err);
            }
        }
    }

    // increase and decrease function
    const increment = () => {
        if (mintAmount >= 3) return;
        setMintAmount(mintAmount + 1);
    }

    const decrement = () => {
        if (mintAmount <= 1) return;
        setMintAmount(mintAmount - 1);
    }

    return (
        <div>
            <div className="flex-box">
                <div className="card">
                    <img src={NFTImage} alt="NFT" className="nft" width="100" height="100" />
                    <div className="text">
                        NFts by <span className="name">Sunset</span>
                    </div>
                </div>
                {isConnected ? (
                    <div className="price">
                        <button id="decrease" onClick={decrement}>-</button>
                        <span id='value'>{mintAmount}</span>
                        <button id="increase" onClick={increment}>+</button>
                        <button className="mint" onClick={handleMint}>Mint</button>
                        <img src={icon} alt="" className="logo" />
                        <span id="price">{mintAmount * mintPrice}</span>
                    </div>
                ) : (
                    <p>You need to connect your wallet to mint</p>
                )}
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

export default Mint;