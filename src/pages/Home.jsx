import React from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
};

export default Home;