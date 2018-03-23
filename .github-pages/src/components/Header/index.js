import React from 'react';
import Link from 'gatsby-link';

import logo from './logo.png';


const Header = () => (
  <div
    style={{
      background: 'linear-gradient(to left top, #0063c0, #25cbf6)',
      marginBottom: '3rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '3rem 1rem',
      }}
    >
      <Link
        to="/"
        style={{
          alignItems: 'center',
          color: 'white',
          display: 'flex',
          textDecoration: 'none',
        }}
      >
        <img style={{ padding: '0 1rem 0.125rem 0', margin: '0' }} src={logo} />
        <h2 style={{ fontWeight: '300', margin: '0' }}>
          React Bootcamp
        </h2>
      </Link>
    </div>
  </div>
)

export default Header
