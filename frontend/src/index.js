import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { MoralisProvider } from "react-moralis";

// serverUri = https://pj6gy5sxjwhn.usemoralis.com:2053/server
// appId = cV4cFcdFGnbanFPOV1Z8cLJRBSDw1pCWEH9pGMIJ

const appId = "DyggYuwv7x4hLc2pPOT9YAkaqA6tefFJYgJnctKm"
const serverUrl = "https://azuodxqgr73w.usemoralis.com:2053/server"

ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider appId={appId} serverUrl={serverUrl} >
      <App />
    </MoralisProvider>,
  </React.StrictMode>,
  document.getElementById('root')
);
