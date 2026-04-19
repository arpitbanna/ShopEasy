import React from "react";
import style from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className={style.nav}>
      <h2>Amazon Clone</h2>
      <input placeholder="Search..." className={style.search} />
      <div>Cart 🛒</div>
    </div>
  );
};



export default Navbar;