import React from 'react';
import { useMoralis } from 'react-moralis';
import './App.css';
import Navbar from './components/Navbar';
import Mint from './components/Mint';

const App = () => {

  const { authenticate } = useMoralis();

  return (
    <div className="container">
      <Navbar authenticate={authenticate} />

      <main>
        <Mint authenticate={authenticate} />
      </main>
    </div>
  );
}

export default App;
