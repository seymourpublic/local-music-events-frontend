import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <button className="home-button">Home</button>
        <span className="navbar-text">good</span>
      </div>
      <div className="navbar-right">
        <img
          src="https://via.placeholder.com/40"
          alt="User Avatar"
          className="user-avatar"
        />
        <div className="user-info">
          <div className="username">Username</div>
          <div className="description">Description</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
