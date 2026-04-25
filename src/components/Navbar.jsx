import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, ShoppingCart, LogOut } from 'lucide-react';
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import style from './Navbar.module.css';

const Navbar = () => {
  const { cartCount } = useCart();
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  // Handle Search submission
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  // Handle Logout
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Failed to log out", error);
    }
  };

  // Predefined Categories
  const categories = [
    { name: 'mobiles', display: 'Mobiles' },
    { name: 'laptops', display: 'Laptops' },
    { name: 'books', display: 'Books' },
    { name: 'menswear', display: 'Menswear' },
    { name: 'womenswear', display: 'Womenswear' }
  ];

  return (
    <header className={style.header}>
      {/* --- Main Navbar Section --- */}
      <div className={style.navMain}>

        {/* LEFT: Logo */}
        <Link to="/" className={style.logoContainer}>
          <span className={style.logoText}>ShopEasy</span>
        </Link>

        {/* CENTER: Search Bar */}
        <form className={style.searchContainer} onSubmit={handleSearch}>
          <input
            type="text"
            className={style.searchInput}
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit" className={style.searchBtn} aria-label="Search">
            <Search size={20} color="#333" />
          </button>
        </form>

        {/* RIGHT: Auth & Cart */}
        <div className={style.rightControls}>

          {/* Auth Section */}
          <div className={style.authContainer}>
            {user ? (
              <div className={style.userSection}>
                <div className={style.userInfo}>
                  <span className={style.helloText}>Hello,</span>
                  <span className={style.emailText}>{user.email.split('@')[0]}</span>
                </div>
                <button onClick={handleLogout} className={style.logoutBtn} aria-label="Logout" title="Logout">
                  <LogOut size={20} />
                </button>
              </div>
            ) : (
              <Link to="/login" className={style.loginBtn}>
                Login
              </Link>
            )}
          </div>

          {/* Cart Section */}
          <Link to="/cart" className={style.cartContainer}>
            <div className={style.cartIconWrapper}>
              <ShoppingCart size={28} />
              <span className={style.cartCount}>{cartCount || 0}</span>
            </div>
            <span className={style.cartText}>Cart</span>
          </Link>

        </div>
      </div>

    </header>
  );
};

export default Navbar;