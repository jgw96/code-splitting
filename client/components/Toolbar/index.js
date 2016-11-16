import React from 'react';
import { Link } from 'react-router/es6';
import './toolbar.scss';

export default () => (
  <nav className="navbar" role="navigation">
    <Link to="/">Beers</Link>
    <Link to="/blog">Bars</Link>
  </nav>
);
