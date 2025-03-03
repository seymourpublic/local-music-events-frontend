import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({user, onLogout}) => {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;


  return (
    <nav className="navbar">
      {/* LEFT SIDE: Nav Links */}
      <ul className="navbar-menu">
        <li className={isActive('/') ? 'active' : ''}>
          <Link to="/">Home</Link>
        </li>
        <li className={isActive('/events') ? 'active' : ''}>
          <Link to="/events">Events</Link>
        </li>
        <li className={isActive('/followers') ? 'active' : ''}>
          <Link to="/followers">Followers</Link>
        </li>
      </ul>

      {/* RIGHT SIDE: User Info & Logout */}
      <div className="navbar-right">
        <div className="user-profile">
          <img
            src={user?.profile_picture || 'https://via.placeholder.com/40'}
            alt="User Avatar"
            className="user-avatar"
          />
          <div className="user-info">
            <div className="username">{user?.name || 'Username'}</div>
            <div className="user-role">{user?.role || 'User Role'}</div>
          </div>
        </div>

        <button className="logout-button" onClick={onLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
