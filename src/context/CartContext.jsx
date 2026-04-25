import React, { createContext, useContext, useState, useEffect } from "react";
import toast from "react-hot-toast";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("shopEasyCart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("shopEasyCart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    toast.success(`${product.title.substring(0, 20)}... added to cart!`, {
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    });
  };

  const updateQuantity = (id, amount) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + amount };
        }
        return item;
      });
      
      const itemToUpdate = updatedCart.find(item => item.id === id);
      if (itemToUpdate && itemToUpdate.quantity <= 0) {
        toast.error(`${itemToUpdate.title.substring(0, 20)}... removed`, { icon: '🗑️' });
        return updatedCart.filter((item) => item.id !== id);
      }
      
      return updatedCart;
    });
  };

  const removeFromCart = (id) => {
    const itemToRemove = cart.find(item => item.id === id);
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    if (itemToRemove) {
      toast.error(`${itemToRemove.title.substring(0, 20)}... removed`, {
        icon: '🗑️',
      });
    }
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("shopEasyCart");
  };

  const getItemQuantity = (id) => {
    const item = cart.find((item) => item.id === id);
    return item ? item.quantity : 0;
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        cartCount,
        subtotal,
        getItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
