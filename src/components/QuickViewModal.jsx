import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingCart, Star } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../utils/formatters';
import styles from './QuickViewModal.module.css';

const QuickViewModal = ({ product, isOpen, onClose }) => {
  const { addToCart, getItemQuantity, updateQuantity, removeFromCart } = useCart();
  
  if (!product) return null;

  const quantity = getItemQuantity(product.id);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            className={styles.backdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <div className={styles.modalWrapper}>
            <motion.div 
              className={styles.modal}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
            <button className={styles.closeBtn} onClick={onClose}>
              <X size={24} />
            </button>

            <div className={styles.content}>
              <div className={styles.imageSection}>
                <img src={product.image} alt={product.title} className={styles.image} />
              </div>

              <div className={styles.infoSection}>
                <span className={styles.category}>{product.brand || "Brand"} • {product.category}</span>
                <h2 className={styles.title}>{product.title}</h2>
                
                <div className={styles.rating}>
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={18} 
                      fill={i < Math.round(product.rating || 4) ? "#ffc107" : "transparent"}
                      color={i < Math.round(product.rating || 4) ? "#ffc107" : "#cbd5e1"}
                    />
                  ))}
                  <span className={styles.reviews}>({product.totalReviews || 120} reviews)</span>
                </div>

                <div className={styles.priceRow}>
                  <span className={styles.price}>{formatPrice(product.price)}</span>
                </div>

                <p className={styles.description}>
                  {product.description || "Experience premium quality and performance with this top-rated product. Designed for durability and style, it's a perfect addition to your lifestyle."}
                </p>

                <div className={styles.actions}>
                  {quantity === 0 ? (
                    <button 
                      className={styles.addBtn}
                      onClick={() => addToCart(product)}
                    >
                      <ShoppingCart size={20} />
                      Add to Cart
                    </button>
                  ) : (
                    <div className={styles.quantityToggle}>
                      <button onClick={() => updateQuantity(product.id, -1)}>-</button>
                      <span>{quantity}</span>
                      <button onClick={() => updateQuantity(product.id, 1)}>+</button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </>
    )}
  </AnimatePresence>
  );
};

export default QuickViewModal;
