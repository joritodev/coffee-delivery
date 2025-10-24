import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/Home';
import Checkout from "./pages/checkout"
import GlobalStyle from "./styles/styles.js"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
    <Checkout />
  </React.StrictMode>
);
