import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import planet from '../images/planet.png';

function Navbar() {
  return (
    <nav>
      <img src={planet} alt="Planet" />
      <h1>
        <Link to="/">
          <h1>SpaceX API</h1>
        </Link>
      </h1>

      <ul>
        <li>
          <NavLink to="/">Rockets</NavLink>
        </li>
        <li>
          <NavLink to="/missions">Missions</NavLink>
        </li>
        <li>
          <NavLink to="/profile">My Profile</NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
