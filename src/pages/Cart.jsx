import React from 'react';
import styles from './Cart.module.css';

const Cart = ({ cart, updateQuantity, removeFromCart }) => {
  const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className={styles.cartContainer}>
      <div className={styles.cartLeft}>
        <h2>Shopping Cart</h2>
        {cart.length === 0 ? (
          <p className={styles.emptyCart}>Your ShopEasy Cart is empty.</p>
        ) : (
          <div className={styles.cartList}>
            {cart.map(item => (
              <div key={item.id} className={styles.cartItem}>
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className={styles.itemImage} 
                  onError={(e) => { e.target.src = "https://via.placeholder.com/120?text=No+Image" }}
                />
                <div className={styles.itemDetails}>
                  <h4 className={styles.itemTitle}>{item.title}</h4>
                  <p className={styles.itemPrice}>₹{item.price.toLocaleString()}</p>
                  <p className={styles.inStock}>In stock</p>
                  
                  <div className={styles.itemActions}>
                    <div className={styles.quantityControl}>
                      <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                    </div>
                    <button className={styles.removeBtn} onClick={() => removeFromCart(item.id)}>Delete</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {cart.length > 0 && (
        <div className={styles.cartRight}>
          <div className={styles.subtotalBox}>
            <p className={styles.subtotalText}>
              Subtotal ({totalItems} items): <br/>
              <strong>₹{subtotal.toLocaleString()}</strong>
            </p>
            <button className={styles.checkoutBtn}>Proceed to Buy</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
