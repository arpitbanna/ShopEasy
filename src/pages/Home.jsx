import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import QuickViewModal from "../components/QuickViewModal";
import styles from './Home.module.css';

const Home = ({ searchQuery }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const categories = [
    { label: "mobiles", value: "mobiles" },
    { label: "laptops", value: "laptops" },
    { label: "books", value: "books" },
    { label: "menswear", value: "menswear" },
    { label: "womenswear", value: "womenswear" },
    { label: "kidswear", value: "kidswear" },
    { label: "watches", value: "watches" },
    { label: "male footwear", value: "malefootwear" },
    { label: "female footwear", value: "femalefootwear" },
    { label: "kids footwear", value: "kidsfootwear" }
  ];

  const [category, setCategory] = useState(categories[4].value); // Default to womenswear

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://ecommerce-api3.p.rapidapi.com/${category}`, {
          headers: {
            'x-rapidapi-host': 'ecommerce-api3.p.rapidapi.com',
            'x-rapidapi-key': 'b729ed1f63mshf67059eb2f42632p1b1e91jsn1cebb5f719ba'
          }
        });
        const data = await response.json();
        
        // Map data to our format
        const mappedData = data.map((item, index) => ({
          id: `${category}-${index}`,
          title: item.Brand ? `${item.Brand} ${item.Description}` : item.Description,
          brand: item.Brand,
          price: parseInt(item.Price?.replace(/[₹,]/g, '') || 0),
          image: item.Image,
          category: category,
          description: item.Description,
          rating: 4 + Math.random(), // Mock rating since API doesn't provide it
          totalReviews: Math.floor(Math.random() * 5000)
        }));

        setProducts(mappedData);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  const filteredProducts = products.filter(p => 
    p.title.toLowerCase().includes((searchQuery || "").toLowerCase())
  );

  return (
    <div className={styles.homeContainer}>
      {/* Category Filter */}
      <div className={styles.categoryFilter}>
        {categories.map(cat => (
          <button 
            key={cat.value} 
            className={`${styles.catBtn} ${category === cat.value ? styles.activeCat : ""}`}
            onClick={() => setCategory(cat.value)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Loading State */}
      {loading ? (
        <div className={styles.loading}>
          <div className={styles.spinner}></div>
          <p>Fetching the latest {category}...</p>
        </div>
      ) : filteredProducts.length === 0 ? (
        <div className={styles.noProducts}>
          <h2>No products found</h2>
          <p>Try checking your spelling or change the category.</p>
        </div>
      ) : (
        <div className={styles.container}>
          {filteredProducts.map((p) => (
            <ProductCard 
              key={p.id} 
              product={p} 
              onQuickView={(prod) => setSelectedProduct(prod)} 
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