import React from "react";
import style from './ProductCard.module.css'

const ProductCard = ({ product }) => {
  return (
    <div className={style.card}>
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>₹{product.price}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
