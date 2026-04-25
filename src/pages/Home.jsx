import React, { useState } from "react";
import { useParams, useSearchParams, useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import QuickViewModal from "../components/QuickViewModal";
import { useProducts } from "../hooks/useProducts";
import { CATEGORIES, DEFAULT_CATEGORY } from "../constants/categories";
import styles from './Home.module.css';

const Home = () => {
  const { categoryId } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  const searchQuery = searchParams.get('q') || "";
  // If we are on a search specifically or base route without category, fallback to default.
  const activeCategory = categoryId || DEFAULT_CATEGORY;

  // Use custom hook for data fetching
  const { products, loading, error } = useProducts(activeCategory);

  // Filter products by search query
  const filteredProducts = products.filter(p => 
    p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    (p.description && p.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className={styles.homeContainer}>
      {/* Category Filter Navigation */}
      <div className={styles.categoryFilter}>
        {CATEGORIES.map(cat => (
          <button 
            key={cat.value} 
            className={`${styles.catBtn} ${activeCategory === cat.value ? styles.activeCat : ""}`}
            onClick={() => navigate(`/category/${cat.value}`)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Show search term header if search query exists */}
      {searchQuery && (
        <h2 style={{ textAlign: 'center', margin: '20px 0', fontFamily: 'system-ui, sans-serif' }}>
          Search results for "{searchQuery}"
        </h2>
      )}

      {/* Error Handling */}
      {error && (
        <div className={styles.errorState}>
          <h3>Oops! Something went wrong.</h3>
          <p>{error}</p>
          <button onClick={() => window.location.reload()}>Retry</button>
        </div>
      )}

      {/* Loading & Product Grid */}
      {loading ? (
        <div className={styles.loading}>
          <div className={styles.spinner}></div>
          <p>Discovering premium {activeCategory}...</p>
        </div>
      ) : filteredProducts.length === 0 && !error ? (
        <div className={styles.noProducts}>
          <h2>No products found</h2>
          <p>Try a different search term or category.</p>
        </div>
      ) : (
        <div className={styles.container}>
          {filteredProducts.map((p) => (
            <ProductCard 
              key={p.id} 
              product={p} 
              onQuickView={setSelectedProduct} 
            />
          ))}
        </div>
      )}

      <QuickViewModal 
        product={selectedProduct} 
        isOpen={!!selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />
    </div>
  );
};

export default Home;