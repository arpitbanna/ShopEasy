import React from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

const Home = () => {
  return (
    <div style={styles.container}>
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    gap: "20px",
    padding: "20px"
  }
};

export default Home;