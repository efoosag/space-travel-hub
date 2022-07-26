import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <header className="header">
    <nav className="navbar">
      <div>
        <h2>Space Travelers Hub </h2>
      </div>
      <ul className="nav-menu list">
        <li className="nav-link">
          <Link to="/">Rockets</Link>
        </li>
        <li className="nav-link">
          <Link to="/missions"> Missions</Link>
        </li>
        <li className="nav-link border-left">
          <Link to="/profile">My Profile</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default NavBar;
