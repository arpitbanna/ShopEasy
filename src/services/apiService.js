const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const RAPIDAPI_KEY = import.meta.env.VITE_RAPIDAPI_KEY;
const RAPIDAPI_HOST = import.meta.env.VITE_RAPIDAPI_HOST;

/**
 * Fetches products by category from the Ecommerce API.
 * @param {string} category 
 * @returns {Promise<Array>}
 */
export const fetchProductsByCategory = async (category) => {
  try {
    const response = await fetch(`${BASE_URL}/${category}`, {
      headers: {
        'x-rapidapi-host': RAPIDAPI_HOST,
        'x-rapidapi-key': RAPIDAPI_KEY
      }
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("fetchProductsByCategory Error:", error);
    throw error;
  }
};
