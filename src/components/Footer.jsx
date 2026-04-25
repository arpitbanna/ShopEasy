import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.backToTop} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        Back to top
      </div>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h3>Get to Know Us</h3>
          <p>About Us</p>
          <p>Careers</p>
          <p>Press Releases</p>
        </div>
        <div className={styles.footerSection}>
          <h3>Connect with Us</h3>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
        </div>
        <div className={styles.footerSection}>
          <h3>Make Money with Us</h3>
          <p>Sell on ShopEasy</p>
          <p>Protect and Build Your Brand</p>
          <p>ShopEasy Global Selling</p>
        </div>
        <div className={styles.footerSection}>
          <h3>Let Us Help You</h3>
          <p>Your Account</p>
          <p>Returns Centre</p>
          <p>Help</p>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <img 
          src="https://placehold.co/100x30/131921/FFFFFF?text=ShopEasy" 
          alt="ShopEasy Logo" 
          className={styles.logo} 
        />
        <p>© 2026, ShopEasy Clone. Built for college project.</p>
      </div>
    </footer>
  );
};

export default Footer;
