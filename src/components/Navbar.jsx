import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const navItems = [
  ['/', 'Home'],
  ['/destinations', 'Destinations'],
  ['/itinerary', 'Itineraries'],
  ['/stays', 'Stays'],
  ['/contact', 'Contact'],
]

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="site-nav">
      <div className="site-nav__shell">
        <Link to="/" className="site-nav__brand" onClick={() => setMenuOpen(false)}>
          <span>Bodhi</span>Bihar
        </Link>

        <div className="site-nav__links desktop-nav">
          {navItems.map(([path, label]) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `site-nav__link${isActive ? ' site-nav__link--active' : ''}`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        <Link
          to="/contact"
          className="site-nav__cta desktop-nav"
        >
          Plan Journey
        </Link>

        <button
          className="site-nav__toggle mobile-nav"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
        </button>
      </div>

      {menuOpen && (
        <div className="site-nav__mobile-panel mobile-nav">
          {navItems.map(([path, label]) => (
            <NavLink
              key={path}
              to={path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `site-nav__mobile-link${isActive ? ' site-nav__mobile-link--active' : ''}`
              }
            >
              {label}
            </NavLink>
          ))}

          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="site-nav__mobile-cta"
          >
            Plan Journey
          </Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar
