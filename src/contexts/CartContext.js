import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
   if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});

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
    if (quantity <= 0) {
      setCartItems(prev => {
        const newItems = { ...prev };
        delete newItems[itemName];
        return newItems;
      });
    } else {
      setCartItems(prev => ({
        ...prev,
        [itemName]: quantity
      }));
    }
  };

  const getTotalQuantity = () => {
    return Object.values(cartItems).reduce((total, quantity) => total + quantity, 0);
  };

  const getItemQuantity = (itemName) => {
    return cartItems[itemName] || 0;
  };

  const clearCart = () => {
    setCartItems({});
  };

  const value = {
    cartItems,
    addToCart,
    adjustCartItem,
    updateCartItem,
    getTotalQuantity,
    getItemQuantity,
    clearCart
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};