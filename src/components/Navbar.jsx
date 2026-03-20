import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: '#FAF6F0',
        padding: '16px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >

      {/* Logo */}
      <Link
        to="/"
        style={{
          textDecoration: 'none',
          fontFamily: 'Cormorant Garamond, Georgia, serif',
          fontSize: '22px',
        }}
      >
        <span style={{ color: '#E8841A' }}>Bodhi</span>
        <span style={{ color: '#2C2416' }}>Bihar</span>
      </Link>

      {/* Desktop Links */}
      <div
        style={{ display: 'flex', alignItems: 'center', gap: '40px' }}
        className="desktop-nav"
      >
        {[
          ['/', 'Home'],
          ['/destinations', 'Destinations'],
          ['/itinerary', 'Itineraries'],
          ['/stays', 'Stays'],
        ].map(([path, label]) => (
          <Link
            key={path}
            to={path}
            style={{
              textDecoration: 'none',
              fontSize: '11px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#2C2416',
            }}
          >
            {label}
          </Link>
        ))}
      </div>

      {/* CTA - Desktop */}
      <a
        href="https://wa.me/919999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="desktop-nav"
        style={{
          backgroundColor: '#E8841A',
          color: '#FAF6F0',
          padding: '12px 24px',
          fontSize: '11px',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          textDecoration: 'none',
        }}
      >
        Plan Journey
      </a>

      {/* Hamburger - Mobile */}
      <button
        className="mobile-nav"
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          fontSize: '24px',
          color: '#2C2416',
        }}
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '60px',
            left: 0,
            right: 0,
            backgroundColor: '#FAF6F0',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            borderTop: '1px solid #E8DDD0',
          }}
        >
          {[
            ['/', 'Home'],
            ['/destinations', 'Destinations'],
            ['/itinerary', 'Itineraries'],
            ['/stays', 'Stays'],
          ].map(([path, label]) => (
            <Link
              key={path}
              to={path}
              onClick={() => setMenuOpen(false)}
              style={{
                textDecoration: 'none',
                fontSize: '14px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#2C2416',
              }}
            >
              {label}
            </Link>
          ))}

          {/* CTA - Mobile */}
          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: '#E8841A',
              color: '#FAF6F0',
              padding: '14px 24px',
              fontSize: '11px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              textAlign: 'center',
            }}
          >
            Plan Journey
          </a>
        </div>
      )}
    </nav>
  )
}

export default Navbar