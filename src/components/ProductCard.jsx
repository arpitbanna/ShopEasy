import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div style={styles.card}>
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>₹{product.price}</p>
      <button>Add to Cart</button>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ddd",
    padding: "10px",
    width: "200px",
    textAlign: "center"
  }
};

export default ProductCard;
