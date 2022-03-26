import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { MoralisProvider } from "react-moralis";

ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider appId={process.env.AppId} serverUrl={process.env.ServerUrl} >
      <App />
    </MoralisProvider>,
  </React.StrictMode>,
  document.getElementById('root')
);
