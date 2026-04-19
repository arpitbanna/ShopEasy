import React from "react";
import style from './ProductCard.module.css'

const ProductCard = ({ product }) => {
  return (
    <div className={style.card}>
      <img src={product.image} alt={product.title} className={style.image} />
      <h4>{product.title}</h4>
      <p className={style.price}>₹{product.price}</p>
      <button className={style.btn}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;