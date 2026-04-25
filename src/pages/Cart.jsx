import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Trash2, Plus, Minus } from 'lucide-react';
import { useCart } from '../context/CartContext';
import styles from './Cart.module.css';

const Cart = () => {
  const { cart, updateQuantity, removeFromCart, subtotal, cartCount } = useCart();

  return (
    <div className={styles.cartContainer}>
      <div className={styles.cartLeft}>
        <h2 className={styles.title}>Shopping Cart</h2>
        <AnimatePresence mode="popLayout">
          {cart.length === 0 ? (
            <motion.div 
              className={styles.emptyCart}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
            >
              <ShoppingBag size={80} strokeWidth={1} className={styles.emptyIcon} />
              <h3>Your ShopEasy Cart is empty.</h3>
              <p>Check your Wish List or continue shopping.</p>
            </motion.div>
          ) : (
            <div className={styles.cartList}>
              {cart.map(item => (
                <motion.div 
                  key={item.id} 
                  className={styles.cartItem}
                  layout
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                >
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className={styles.itemImage} 
                    onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/120x120/e2e8f0/1e293b?text=No+Image"; }}
                  />
                  <div className={styles.itemDetails}>
                    <h4 className={styles.itemTitle}>{item.title}</h4>
                    <p className={styles.itemPrice}>₹{item.price.toLocaleString()}</p>
                    <p className={styles.inStock}>In stock</p>
                    
                    <div className={styles.itemActions}>
                      <div className={styles.quantityControl}>
                        <button onClick={() => updateQuantity(item.id, -1)} disabled={item.quantity <= 1}>
                          <Minus size={16} />
                        </button>
                        <span>{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, 1)}>
                          <Plus size={16} />
                        </button>
                      </div>
                      <button className={styles.removeBtn} onClick={() => removeFromCart(item.id)}>
                        <Trash2 size={16} />
                        <span>Delete</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </AnimatePresence>
      </div>

      {cart.length > 0 && (
        <motion.div 
          className={styles.cartRight}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div className={styles.subtotalBox}>
            <p className={styles.subtotalText}>
              Subtotal ({cartCount} items): <br/>
              <strong>₹{subtotal.toLocaleString()}</strong>
            </p>
            <button className={styles.checkoutBtn}>Proceed to Buy</button>
            <div className={styles.safetyInfo}>
              <span className={styles.emiText}>EMI available</span>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Cart;
