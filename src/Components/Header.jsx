import React from "react";
import {Link} from "react-router-dom"
const Header = () => {
  return (
    <>
      <div className="main-div-header">
      <div className="logo">
        <h2>Swiggy</h2>
      </div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/login">Login</Link>
        </nav>
      </div>
    </>
  );
};

export default Header;
