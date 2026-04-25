import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Menu, User } from 'lucide-react';
import './Navbar.css';

function Navbar() {
  const navigate = useNavigate();

  const openSearchPage = (message) => {
    navigate('/search');
    console.log(message);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src="/airbnbclone-logo.svg" alt="Airbnb Logo" className="logo-image" />
        </Link>

        <div className="navbar-search">
          <button
            className="search-button search-button-single"
            onClick={() => openSearchPage('Opening search page')}
            type="button"
          >
            <span className="search-text-light">Search</span>
            <div className="search-icon-circle">
              <Search size={14} color="white" />
            </div>
          </button>
        </div>

        <div className="navbar-user">
          <Link to="/dashboard" className="host-link">
            Airbnb your home
          </Link>

          <div className="user-menu">
            <Menu size={18} className="menu-icon" />
            <Link to="/login" className="user-icon-circle">
              <User size={16} color="white" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
