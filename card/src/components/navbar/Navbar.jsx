import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo" onClick={closeMenu}>
        <div className="nav-left">Card Defender</div>
      </Link>
      
      {/* Hamburger Menu Button */}
      <button 
        className={`hamburger ${isMenuOpen ? 'active' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`nav-right ${isMenuOpen ? 'active' : ''}`}>
        <Link to="/home" className="nav-link" onClick={closeMenu}>Prediction</Link>
        <Link to="/about" className="nav-link" onClick={closeMenu}>Analytics</Link>
        <Link to="/contact" className="nav-link" onClick={closeMenu}>Review</Link>
      </div>
    </nav>
  );
};

export default Navbar;
