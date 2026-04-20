import React from "react";
import style from './Navbar.module.css'

const Navbar = () => {
  return (
    <header className={style.nav}>
      <h2 className={style.brand}>Amazon Clone</h2>
      <div className={style.searchWrap}>
        <input placeholder="Search products" className={style.search} />
      </div>
      <button className={style.cartBtn} type="button">Cart (0)</button>
    </header>
  );
};



export default Navbar;