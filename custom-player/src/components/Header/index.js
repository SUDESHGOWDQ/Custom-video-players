import React, { useState } from "react";
import "./index.css";

const Navbar = ({ isFullscreen }) => {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <div>
      {!isFullscreen && (
        <nav className="navbar">
          <div className="navbar-container">
            <div className="logo">MyApp</div>
            <ul className={`nav-links ${isMobile ? "active" : ""}`}>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
            <div className="hamburger" onClick={toggleMobileMenu}>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
          </div>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
