import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Search, ShoppingCart, Menu } from "lucide-react";
import style from './Navbar.module.css';

const Navbar = () => {
  return (
    <header className={style.header}>
      <div className={style.navMain}>
        <Link to="/" className={`${style.navItem} ${style.logoContainer}`}>
          <img 
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" 
            alt="Amazon Logo" 
            className={style.logo} 
          />
          <span className={style.logoExtension}>.in</span>
        </Link>

        {/* Location */}
        <div className={`${style.navItem} ${style.locationContainer}`}>
          <MapPin size={18} className={style.locationIcon} />
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
            placeholder="Search Amazon.in" 
          />
          <button className={style.searchBtn}>
            <Search size={20} color="#333" />
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
            <ShoppingCart size={32} />
            <span className={style.cartCount}>0</span>
          </div>
          <span className={style.cartText}>Cart</span>
        </Link>
      </div>

      <div className={style.navSub}>
        <div className={`${style.subItem} ${style.menuAll}`}>
          <Menu size={20} />
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
        <Link to="/" className={style.subItem}>Amazon Pay</Link>
        <Link to="/" className={style.subItem}>Fashion</Link>
        <Link to="/" className={style.subItem}>Electronics</Link>
      </div>
    </header>
  );
};

export default Navbar;