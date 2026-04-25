import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import style from './Navbar.module.css';

const Navbar = ({ onSearch }) => {
  const { cartCount } = useCart();
  return (
    <header className={style.header}>
      <div className={style.navMain}>
        <Link to="/" className={`${style.navItem} ${style.logoContainer}`}>
          <img 
            src="https://placehold.co/100x30/131921/FFFFFF?text=ShopEasy" 
            alt="ShopEasy Logo" 
            className={style.logo} 
          />
          <span className={style.logoExtension}>.in</span>
        </Link>

        {/* Location */}
        <div className={`${style.navItem} ${style.locationContainer}`}>
          <div className={style.locationIcon}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
          </div>
          <div className={style.locationText}>
            <span className={style.locationLine1}>Delivering to Pune 411015</span>
            <span className={style.locationLine2}>Update location</span>
          </div>
        </div>

        <div className={style.searchContainer}>
          <select className={style.searchSelect}>
            <option>All</option>
          </select>
          <input 
            type="text" 
            className={style.searchInput} 
            placeholder="Search ShopEasy.in" 
            onChange={(e) => onSearch && onSearch(e.target.value)}
          />
          <button className={style.searchBtn}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          </button>
        </div>

        <div className={`${style.navItem} ${style.languageContainer}`}>
          <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/20px-Flag_of_India.svg.png" alt="IN Flag" className={style.flag} />
          <span className={style.langText}>EN</span>
          <span className={style.arrow}>▼</span>
        </div>

        <div className={`${style.navItem} ${style.accountContainer}`}>
          <span className={style.line1}>Hello, sign in</span>
          <span className={style.line2}>Account & Lists <span className={style.arrow}>▼</span></span>
        </div>
        <div className={`${style.navItem} ${style.ordersContainer}`}>
          <span className={style.line1}>Returns</span>
          <span className={style.line2}>& Orders</span>
        </div>
        <Link to="/cart" className={`${style.navItem} ${style.cartContainer}`}>
          <div className={style.cartIconWrapper}>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
            <span className={style.cartCount}>{cartCount || 0}</span>
          </div>
          <span className={style.cartText}>Cart</span>
        </Link>
      </div>

      <div className={style.navSub}>
        <div className={`${style.subItem} ${style.menuAll}`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          <span>All</span>
        </div>
        <Link to="/" className={style.subItem}>Fresh</Link>
        <Link to="/" className={style.subItem}>MX Player</Link>
        <Link to="/" className={style.subItem}>Sell</Link>
        <Link to="/" className={style.subItem}>Bestsellers</Link>
        <Link to="/" className={style.subItem}>Mobiles</Link>
        <Link to="/" className={style.subItem}>Today's Deals</Link>
        <Link to="/" className={style.subItem}>Customer Service</Link>
        <Link to="/" className={style.subItem}>New Releases</Link>
        <Link to="/" className={style.subItem}>Prime</Link>
        <Link to="/" className={style.subItem}>ShopEasy Pay</Link>
        <Link to="/" className={style.subItem}>Fashion</Link>
        <Link to="/" className={style.subItem}>Electronics</Link>
      </div>
    </header>
  );
};

export default Navbar;