import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = props => (
  <header>
    <h1>Day IQ</h1>
    <p>Plan Your Day</p>
    <nav>
      <ul>
        <li>
          <NavLink activeClassName="is-active" to="/" exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="is-active" to="/create">
            Create
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="is-active" to="/edit">
            Edit
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="is-active" to="/help">
            Help
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
