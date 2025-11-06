import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/Home';
import Checkout from "./pages/checkout"
import Sucess from './pages/sucess/index.js';
import GlobalStyle from "./styles/styles.js"
import { CartProvider } from './contexts/CartContext.js';
import { CheckoutProvider } from './contexts/CheckoutContext.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CheckoutProvider>
      <CartProvider>
        <BrowserRouter>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/sucess" element={<Sucess />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </CheckoutProvider>
  </React.StrictMode>
);
