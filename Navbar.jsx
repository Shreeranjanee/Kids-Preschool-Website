import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../src/kiddylogo.jpg';
import './Navbar.css';
import { FaCaretDown } from 'react-icons/fa';  // Importing the dropdown icon

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdown(!dropdown);
  };

  return (
    <nav className="navbar">
      {/* Logo Box */}
      <div className="navbar-logo">
        <img src={logo} alt="Logo" style={{ height: '150px', width: '150px', objectFit: 'contain' }} />
      </div>

      <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>

        <div className="dropdown" onMouseEnter={handleDropdownToggle} onMouseLeave={handleDropdownToggle}>
          <Link to="/programs">
            Programs <FaCaretDown /> {/* Adding the dropdown icon */}
          </Link>
          {dropdown && (
            <div className="dropdown-menu">
              <Link to="/toddler">Toddler</Link>
              <Link to="/preschooler">Preschooler</Link>
              <Link to="/prekindergarten">Pre-Kindergarten</Link>
            </div>
          )}
        </div>

      
        <Link to="/teachers">Teachers</Link>
        <Link to="/schedule">ClassSchedule</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/contact">Contact</Link>
        
        <Link to="/login"></Link>
        <Link to="/parentdashboard"></Link>
      </div>
    </nav>
  );
};

export default Navbar;
