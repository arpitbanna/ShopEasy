import React, { useState } from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import styles from './Home.module.css';

const Home = ({ searchQuery, addToCart }) => {
  const [category, setCategory] = useState("All");

  const categories = ["All", "Electronics", "Fashion", "Shoes"];

  const filteredProducts = products.filter(p => {
    // Search match
    const matchesSearch = p.title.toLowerCase().includes((searchQuery || "").toLowerCase());
    
    // Category match
    let matchesCategory = true;
    if (category === "Electronics") {
      const elecCats = ["Smartphones", "Laptops", "Televisions", "Cameras", "Monitors", "Tablets", "Gaming", "Smart Home", "Accessories", "Audio"];
      matchesCategory = elecCats.includes(p.category);
    } else if (category === "Fashion") {
      matchesCategory = p.category === "Wearables";
    } else if (category === "Shoes") {
      matchesCategory = p.category === "Footwear";
    }

    return matchesSearch && matchesCategory;
  });

  return (
    <div className={styles.homeContainer}>
      {/* Category Filter */}
      <div className={styles.categoryFilter}>
        {categories.map(cat => (
          <button 
            key={cat} 
            className={`${styles.catBtn} ${category === cat ? styles.activeCat : ""}`}
            onClick={() => setCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid or Empty State */}
      {filteredProducts.length === 0 ? (
        <div className={styles.noProducts}>
          <h2>No products found</h2>
          <p>Try checking your spelling or use more general terms.</p>
        </div>
      ) : (
        <div className={styles.container}>
          {filteredProducts.map((p) => (
            <ProductCard key={p.id} product={p} addToCart={() => addToCart(p)} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;