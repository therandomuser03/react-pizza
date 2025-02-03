import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const cartCount = 3; // Replace with data from CartContext.

  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">
          Hoodify
        </Link>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <div className="cart-icon">
          <Link to="/cart">
            🛒 <span className="cart-count">{cartCount}</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
