import React from "react";

const Navbar = () => {
  return (
    <div style={styles.nav}>
      <h2>Amazon Clone</h2>
      <input placeholder="Search..." style={styles.search} />
      <div>Cart 🛒</div>
    </div>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px",
    background: "#131921",
    color: "white"
  },
  search: {
    width: "40%",
    padding: "8px"
  }
};

export default Navbar;