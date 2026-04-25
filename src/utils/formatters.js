/**
 * Formats a numeric price into a currency string (Indian Rupee).
 * @param {number} price 
 * @returns {string}
 */
export const formatPrice = (price) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(price);
};

/**
 * Parses a price string from the API (e.g. "₹1,299") into a number.
 * @param {string} priceStr 
 * @returns {number}
 */
export const parseApiPrice = (priceStr) => {
  if (!priceStr) return 0;
  return parseInt(priceStr.replace(/[₹,]/g, '')) || 0;
};
