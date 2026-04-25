import React from "react";
import { motion } from "framer-motion";
import { Plus, Minus, Eye } from 'lucide-react';
import { useCart } from "../context/CartContext";
import style from './ProductCard.module.css';

const ProductCard = ({ product, onQuickView }) => {
  const { addToCart, getItemQuantity, updateQuantity } = useCart();
  const quantity = getItemQuantity(product.id);

  // Simple stars
  const renderStars = (rating) => {
    const fullStars = Math.round(rating || 4);
    return "⭐".repeat(fullStars) + "☆".repeat(5 - fullStars);
  };

  return (
    <motion.div 
      className={style.card}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className={style.imageContainer} onClick={() => onQuickView(product)}>
        <img 
          src={product.image} 
          alt={product.title} 
          className={style.image} 
          onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/200x200/e2e8f0/1e293b?text=No+Image"; }}
        />
        <div className={style.quickViewOverlay}>
           <button className={style.quickViewBtn}>
             <Eye size={18} />
             Quick View
           </button>
        </div>
      </div>
      <h4 className={style.title} onClick={() => onQuickView(product)}>
        {product.title.length > 50 ? product.title.substring(0, 47) + "..." : product.title}
      </h4>
      
      <div className={style.rating}>
        <span>{renderStars(product.rating)}</span>
        <span className={style.reviewCount}>{(product.totalReviews || 0).toLocaleString()}</span>
      </div>

      <div className={style.priceSection}>
        <p className={style.price}>₹{product.price.toLocaleString()}</p>
        {product.originalPrice && (
          <p className={style.originalPrice}>
            <strike>₹{product.originalPrice.toLocaleString()}</strike>
          </p>
        )}
      </div>
      
      <div className={style.actionWrapper}>
        {quantity === 0 ? (
          <button 
            className={style.btn} 
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        ) : (
          <div className={style.quantityControl}>
            <button onClick={() => updateQuantity(product.id, -1)} className={style.qBtn}>
              <Minus size={16} />
            </button>
            <span className={style.qCount}>{quantity}</span>
            <button onClick={() => updateQuantity(product.id, 1)} className={style.qBtn}>
              <Plus size={16} />
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProductCard;