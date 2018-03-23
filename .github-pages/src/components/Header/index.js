import React from 'react'
import Link from 'gatsby-link'

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
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            fontWeight: '300',
            textDecoration: 'none',
          }}
        >
          Tanda React Bootcamp
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
