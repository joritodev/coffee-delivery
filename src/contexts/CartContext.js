import { createContext, useContext, useEffect, useState, useCallback } from 'react';

import Cookies from 'js-cookie';

const CartContext = createContext();
const COOKIE_KEY = 'coffee-delivery:cart-v1'

export const useCart = () => {
  const context = useContext(CartContext);
  return context;
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const itemsJSON = Cookies.get(COOKIE_KEY);
    return itemsJSON ? JSON.parse(itemsJSON) : []
  });

  useEffect(() => {
    const itemsJSON = JSON.stringify(cartItems)
    Cookies.set(COOKIE_KEY, itemsJSON, { expires: 30 })
  }, [cartItems])

  const addToCart = (itemName, quantity = 1) => {
    setCartItems(prev => ({
      ...prev,
      [itemName]: (prev[itemName] || 0) + quantity
    }));
  };

  const adjustCartItem = (itemName, quantityChange) => {
    setCartItems(prev => {
      const currentQuantity = prev[itemName] || 0;
      const newQuantity = currentQuantity + quantityChange;

      if (newQuantity <= 0) {
        const newItems = { ...prev };
        delete newItems[itemName];
        return newItems;
      } else {
        return {
          ...prev,
          [itemName]: newQuantity
        };
      }
    });
  };

  const updateCartItem = (itemName, quantity) => {
      setCartItems(prev => ({
        ...prev,
        [itemName]: quantity
      }));
  };

  const RemoveItem = (itemName) => {
    setCartItems(prev => {
      const newItems = { ...prev };
      delete newItems[itemName];
      return newItems;
    });
  }

  const getTotalQuantity = () => {
    return Object.values(cartItems).reduce((total, quantity) => total + quantity, 0);
  };

  const getItemQuantity = (itemName) => {
    return cartItems[itemName] || 0;
  };

  const clearCart = useCallback(() => {
    setCartItems({});
  }, []);

  const value = {
    cartItems,
    addToCart,
    adjustCartItem,
    updateCartItem,
    getTotalQuantity,
    getItemQuantity,
    clearCart,
    RemoveItem
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};