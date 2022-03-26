import React, { useState } from 'react';
import { useMoralis } from 'react-moralis';
import './App.css';
import Navbar from './components/Navbar';
import Mint from './components/Mint';

const App = () => {
  const [accounts, setAccounts] = useState([]);

  const { authenticate } = useMoralis();

  return (
    <div className="container">
      <Navbar accounts={accounts} setAccounts={setAccounts} />

      <main>
        <Mint accounts={accounts} setAccounts={setAccounts} />
        <p>View NFT collection here - <a href="https://testnets.nftrade.com/assets/fuji/0xe1975d27c0edcb80431f5e384d888c28ff5e609d" rel="noreferrer" target="_blank">NFT Trade</a></p>
      </main>
    </div>
  );
}

export default App;
