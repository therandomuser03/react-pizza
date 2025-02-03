import React, { createContext, useState, useContext } from 'react';

// Create CartContext
const CartContext = createContext();

// Custom hook to use CartContext
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Add an item to the cart
  const addToCart = (item) => {
    setCartItems((prev) => [...prev, item]);
  };

  // Remove an item from the cart
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Clear the cart
  const clearCart = () => setCartItems([]);

  // Total cart count
  const cartCount = cartItems.length;

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart, cartCount }}
    >
      {children}
    </CartContext.Provider>
  );
};
