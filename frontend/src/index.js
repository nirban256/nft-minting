import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { MoralisProvider } from "react-moralis";

// serverUri = https://pj6gy5sxjwhn.usemoralis.com:2053/server
// appId = cV4cFcdFGnbanFPOV1Z8cLJRBSDw1pCWEH9pGMIJ

const appId = "It6Kdp1vr2T7J28til6harv8x485K1e549krwKnf"
const serverUrl = "https://rw2lijq0uwyh.usemoralis.com:2053/server"

ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider appId={appId} serverUrl={serverUrl} >
      <App />
    </MoralisProvider>,
  </React.StrictMode>,
  document.getElementById('root')
);
