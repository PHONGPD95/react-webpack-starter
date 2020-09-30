import React from 'react';
import { Link } from 'react-router-dom';

import classes from './styles.scss';

function Navigation() {
  return (
    <nav className={classes.Nav}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/counter">Counter</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
