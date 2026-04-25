import React from "react";
import style from './ProductCard.module.css'

const ProductCard = ({ product, addToCart }) => {
  // Simple stars
  const renderStars = (rating) => {
    const fullStars = Math.round(rating || 4);
    return "⭐".repeat(fullStars) + "☆".repeat(5 - fullStars);
  };

  return (
    <div className={style.card}>
      <div className={style.imageContainer}>
        <img 
          src={product.image} 
          alt={product.title} 
          className={style.image} 
          onError={(e) => { e.target.src = "https://via.placeholder.com/200?text=No+Image" }}
        />
      </div>
      <h4 className={style.title}>
        {product.title.length > 50 ? product.title.substring(0, 47) + "..." : product.title}
      </h4>
      
      <div className={style.rating}>
        <span>{renderStars(product.rating)}</span>
        <span className={style.reviewCount}>{(product.totalReviews || 0).toLocaleString()}</span>
      </div>

      <p className={style.price}>₹{product.price.toLocaleString()}</p>
      {product.originalPrice && (
        <p className={style.originalPrice}>
          M.R.P: <strike>₹{product.originalPrice.toLocaleString()}</strike> ({product.discount}% off)
        </p>
      )}
      
      <button className={style.btn} onClick={addToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;