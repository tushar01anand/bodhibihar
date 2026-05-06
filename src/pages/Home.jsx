import { Link } from 'react-router-dom'
import PageMeta from '../components/PageMeta'
import { CONTACT_EMAIL, createWhatsAppLink } from '../lib/contact'

const destinations = [
  {
    name: 'Bodh Gaya',
    tagline: 'Meditate beneath the Bodhi Tree and experience the stillness of awakening.',
    image: '/bodhgaya.jpg',
    accent: 'Mahabodhi Temple',
  },
  {
    name: 'Nalanda',
    tagline: 'Walk the ruins of the world’s great monastic university and its living memory.',
    image: '/nalanda.jpg',
    accent: 'Ancient Learning',
  },
  {
    name: 'Rajgir',
    tagline: 'Trace the hills, caves, and teachings that shaped the Buddha’s early journeys.',
    image: '/rajgir.jpg',
    accent: 'Griddhakuta Hill',
  },
  {
    name: 'Vaishali',
    tagline: 'Discover a land of monastic calm, republican history, and sacred relics.',
    image: '/vaishali.jpg',
    accent: 'Relic Stupa',
  },
]

const highlights = [
  {
    number: '01',
    title: 'Pilgrim-first planning',
    desc: 'Journeys are designed around reflection, rest, and meaningful time at each sacred site instead of rushed checklists.',
  },
  {
    number: '02',
    title: 'Trusted local knowledge',
    desc: 'Historical context, monastery etiquette, and transport choices are curated for international and domestic travelers alike.',
  },
  {
    number: '03',
    title: 'Flexible trip building',
    desc: 'We can shape the route around retreat time, comfort level, arrival city, and whether you are traveling solo, as a family, or as a group.',
  },
]

const itineraryDays = [
  'Day 1: Arrival and evening prayers in Bodh Gaya',
  'Day 2: Mahabodhi Temple, monasteries, and meditation time',
  'Day 3: Nalanda ruins and Rajgir’s sacred hill trails',
  'Day 4: Vaishali and quiet heritage stops',
  'Day 5: Reflection, local shopping, and departure',
]

const footerLinks = [
  ['/', 'Home'],
  ['/destinations', 'Destinations'],
  ['/itinerary', 'Itineraries'],
  ['/stays', 'Stays'],
  ['/contact', 'Contact'],
]

const Home = () => {
  return (
    <div className="home-page">
      <PageMeta />

      <section className="home-hero">
        <div className="home-hero__veil" />
        <div className="home-shell home-hero__content">
          <div className="home-hero__copy">
            <p className="home-kicker home-kicker--light">Bihar Buddhist Circuit</p>
            <h1>
              A quieter way to
              <span> walk toward enlightenment</span>
            </h1>
            <p className="home-hero__lede">
              Explore Bodh Gaya, Nalanda, Rajgir, and Vaishali through a journey
              designed with spiritual depth, local knowledge, and calm modern comfort.
            </p>

            <div className="home-hero__actions">
              <Link to="/destinations" className="home-button home-button--primary">
                Explore Destinations
              </Link>
              <Link to="/itinerary" className="home-button home-button--ghost">
                Plan My Journey
              </Link>
            </div>
          </div>

          <div className="home-hero__panel">
            <p className="home-kicker">Best for mindful travel</p>
            <div className="home-hero__stats">
              <div>
                <strong>4</strong>
                <span>Sacred cities</span>
              </div>
              <div>
                <strong>5D</strong>
                <span>Signature circuit</span>
              </div>
              <div>
                <strong>24h</strong>
                <span>Reply target</span>
              </div>
            </div>
            <p className="home-hero__panel-copy">
              Built for pilgrims, cultural travelers, and retreat seekers who want
              clarity, beauty, and breathing room without feeling pushed into a rushed package.
            </p>
          </div>
        </div>
      </section>

      <section className="home-trust-strip">
        <div className="home-shell home-trust-strip__grid">
          <div>
            <strong>Custom planning</strong>
            <span>Share dates, group size, and comfort level before you commit.</span>
          </div>
          <div>
            <strong>Indicative pricing</strong>
            <span>Final quotes depend on season, stays, transport, and inclusions.</span>
          </div>
          <div>
            <strong>Direct coordination</strong>
            <span>Talk to a human on WhatsApp or email, not a generic lead form void.</span>
          </div>
        </div>
      </section>

      <section className="home-intro">
        <div className="home-shell home-intro__grid">
          <div>
            <p className="home-kicker">Sacred Gateways</p>
            <h2>The four places that define the journey.</h2>
          </div>
          <p className="home-intro__text">
            From the awakening at Bodh Gaya to the scholarship of Nalanda, the
            hills of Rajgir, and the peace of Vaishali, each stop reveals a
            different face of Buddhist heritage in Bihar.
          </p>
        </div>
      </section>

      <section className="home-destinations">
        <div className="home-shell">
          <div className="home-destination-grid">
            {destinations.map((dest) => (
              <Link
                key={dest.name}
                to="/destinations"
                className="home-destination-card"
                style={{ backgroundImage: `linear-gradient(180deg, rgba(28, 23, 16, 0.18), rgba(28, 23, 16, 0.88)), url(${dest.image})` }}
              >
                <p className="home-destination-card__accent">{dest.accent}</p>
                <div>
                  <h3>{dest.name}</h3>
                  <p>{dest.tagline}</p>
                </div>
                <span>Discover place</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="home-highlights">
        <div className="home-shell">
          <div className="home-section-heading">
            <div>
              <p className="home-kicker home-kicker--light">Why BodhiBihar</p>
              <h2>Designed to feel reverent, seamless, and deeply rooted.</h2>
            </div>
            <p>
              We blend itinerary design, local coordination, and spiritual
              context so the home page promise carries into the actual journey.
            </p>
          </div>

          <div className="home-highlight-grid">
            {highlights.map((item) => (
              <article key={item.number} className="home-highlight-card">
                <p className="home-highlight-card__number">{item.number}</p>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-itinerary">
        <div className="home-shell home-itinerary__grid">
          <div className="home-itinerary__summary">
            <p className="home-kicker">Featured Route</p>
            <h2>The 5-day Bihar Buddhist Circuit</h2>
            <p>
              A balanced route for first-time visitors who want spiritual depth,
              historical context, and enough unstructured time to actually absorb
              each place.
            </p>

            <div className="home-itinerary__metrics">
              <div>
                <strong>5</strong>
                <span>Days</span>
              </div>
              <div>
                <strong>4</strong>
                <span>Sacred sites</span>
              </div>
              <div>
                <strong>Rs. 32,500</strong>
                <span>Starting price</span>
              </div>
            </div>

            <Link to="/itinerary" className="home-button home-button--dark">
              View Full Itinerary
            </Link>
            <p className="home-itinerary__disclaimer">
              Final quotes vary by season, room category, transport, guide needs, and group size.
            </p>
          </div>

          <div className="home-itinerary__card">
            <p className="home-kicker">What the days feel like</p>
            <div className="home-itinerary__list">
              {itineraryDays.map((day) => (
                <p key={day}>{day}</p>
              ))}
            </div>
            <blockquote>
              “Less rush, more presence” is the principle behind this signature
              route.
            </blockquote>
          </div>
        </div>
      </section>

      <section className="home-cta">
        <div className="home-shell home-cta__panel">
          <div>
            <p className="home-kicker">Begin the pilgrimage</p>
            <h2>Start with a route, then shape the experience around your real needs.</h2>
          </div>
          <div className="home-cta__actions">
            <Link to="/contact" className="home-button home-button--primary">
              Share Trip Brief
            </Link>
            <a
              href={createWhatsAppLink('Hello BodhiBihar, I would like help planning a Bihar Buddhist circuit trip.')}
              target="_blank"
              rel="noopener noreferrer"
              className="home-button home-button--outline"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <footer className="home-footer">
        <div className="home-shell">
          <div className="home-footer__grid">
            <div>
              <h3>
                <span>Bodhi</span>Bihar
              </h3>
              <p>
                A contemporary pilgrimage platform for discovering Bihar’s sacred
                Buddhist landscape with intention.
              </p>
            </div>

            <div>
              <p className="home-footer__label">Navigate</p>
              {footerLinks.map(([path, label]) => (
                <Link key={label} to={path}>
                  {label}
                </Link>
              ))}
            </div>

            <div>
              <p className="home-footer__label">Sacred Sites</p>
              {destinations.map((site) => (
                <Link key={site.name} to="/destinations">
                  {site.name}
                </Link>
              ))}
            </div>

            <div>
              <p className="home-footer__label">Contact</p>
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
              <a
                href={createWhatsAppLink('Hello BodhiBihar, I would like help planning a Buddhist circuit journey.')}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp support
              </a>
            </div>
          </div>

          <div className="home-footer__bottom">
            <p>2026 BodhiBihar. The digital sanctuary for sacred travel.</p>
            <div>
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms of Service</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
