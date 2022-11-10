import './Nav.css';

import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="nav">
      <div className="PhoneShop">
        <NavLink to="/">
          <h2>PhoneShop</h2>
        </NavLink>
      </div>
      <div className="devices">
        <NavLink to="/phones">
          <div className="divPhones">Phones</div>
        </NavLink>
        <NavLink to="/tablets">
          <div className="divTablets">Tablets</div>
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
