import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 bg-cream">
      
      {/* Brand */}
      <Link to="/" className="font-serif text-xl">
        <span className="text-saffron">Bodhi</span>
        <span className="text-charcoal">Bihar</span>
      </Link>

      {/* Navigation Links */}
      <div className="flex items-center gap-10">
        <Link to="/" className="text-sm uppercase tracking-widest text-charcoal hover:text-saffron">Home</Link>
        <Link to="/destinations" className="text-sm uppercase tracking-widest text-charcoal hover:text-saffron">Destinations</Link>
        <Link to="/itinerary" className="text-sm uppercase tracking-widest text-charcoal hover:text-saffron">Itineraries</Link>
        <Link to="/stays" className="text-sm uppercase tracking-widest text-charcoal hover:text-saffron">Stays</Link>
      </div>

      {/* CTA Button */}
      <a
        href="https://wa.me/919999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-saffron text-cream text-sm uppercase tracking-widest px-6 py-3 hover:bg-gold"
      >
        Plan Journey
      </a>

    </nav>
  )
}

export default Navbar