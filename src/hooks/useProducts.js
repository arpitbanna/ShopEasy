import { useState, useEffect } from 'react';
import { fetchProductsByCategory } from '../services/apiService';
import { parseApiPrice } from '../utils/formatters';

/**
 * Custom hook to manage product fetching logic.
 * @param {string} category 
 * @returns {Object} { products, loading, error }
 */
export const useProducts = (category) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!category) return;

    const getProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchProductsByCategory(category);
        
        // Map data to standardized internal format
        const mappedData = data.map((item, index) => ({
          id: `${category}-${index}-${item["Unnamed: 0"] || index}`,
          title: item.Brand ? `${item.Brand} ${item.Description}` : item.Description,
          brand: item.Brand || "Brand",
          price: parseApiPrice(item.Price),
          image: item.Image,
          category: category,
          description: item.Description,
          rating: 4 + Math.random(), // Simulated rating
          totalReviews: Math.floor(Math.random() * 5000)
        }));

        setProducts(mappedData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, [category]);

  return { products, loading, error };
};
