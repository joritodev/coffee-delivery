import { createContext, useContext, useEffect, useState, useCallback } from 'react';

import Cookies from 'js-cookie';

const CheckoutContext = createContext();
const COOKIE_KEY = 'meu-app-cafe:checkout-address-v1';

const initialState = {
  cep: '',
  rua: '',
  numero: '',
  complemento: '',
  bairro: '',
  cidade: '',
  uf: '',
  paymentMethod: null,
}

export const useCheckout = () => {
  const context = useContext(CheckoutContext);
  return context;
};

export const CheckoutProvider = ({ children }) => {
  const [address, setAddress] = useState(() => {
    const addressJSON = Cookies.get(COOKIE_KEY);
    return addressJSON ? JSON.parse(addressJSON) : initialState;
  })

  useEffect(() => {
    const itemsJSON = JSON.stringify(address)
    Cookies.set(COOKIE_KEY, itemsJSON)
  }, [address])

  const clearCheckoutData = useCallback(() => {
    setAddress(initialState);
    Cookies.remove(COOKIE_KEY);
  }, [])

  const updateAddressField = useCallback((field, value) => {
    setAddress(prevAddress => ({
      ...prevAddress,
      [field]: value
    }));
  }, []);

  const setPaymentMethod = useCallback((method) => {
     setAddress(prevAddress => ({
      ...prevAddress,
      paymentMethod: method
     }));
  }, []);

  const value = {
    address,
    clearCheckoutData,
    setPaymentMethod,
    updateAddressField
  }

  return (
    <CheckoutContext.Provider value={value}>
      {children}
    </CheckoutContext.Provider>
  );
}
