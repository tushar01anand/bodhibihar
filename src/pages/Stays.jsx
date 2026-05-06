import { useState } from 'react'
import PageMeta from '../components/PageMeta'
import { createWhatsAppLink } from '../lib/contact'

const stays = [
  {
    name: 'Root Institute',
    location: 'Bodh Gaya, Bihar',
    type: 'Monastery',
    price: '2,400',
    description:
      'A center for Buddhist meditation and study with simple, clean rooms surrounded by gardens and retreat energy.',
    whatsapp: '+917782019833',
    filter: 'Bodh Gaya',
    mood: 'Quiet retreat setting',
  },
  {
    name: 'The Royal Residency',
    location: 'Bodh Gaya',
    type: 'Hotel',
    price: '8,500',
    description:
      'Japanese-inspired hospitality focused on silence and comfort, with a Zen garden atmosphere and shared contemplative spaces.',
    whatsapp: '+917782019833',
    filter: 'Bodh Gaya',
    mood: 'Refined comfort',
  },
  {
    name: 'Tergar Guest House',
    location: 'Bodh Gaya',
    type: 'Monastery',
    price: '1,800',
    description:
      'An authentic stay within a vibrant Tibetan Buddhist community with modest amenities and a grounded monastic feel.',
    whatsapp: '+917782019833',
    filter: 'Bodh Gaya',
    mood: 'Community-led stay',
  },
  {
    name: 'Vishwa Shanti Lodge',
    location: 'Rajgir',
    type: 'Hotel',
    price: '4,200',
    description:
      'A boutique lodge near Gridhakuta Hill with hillside views, organic vegetarian cuisine, and a softer boutique experience.',
    whatsapp: '+917782019833',
    filter: 'Rajgir',
    mood: 'Scenic hillside base',
  },
  {
    name: 'Thai Monastery Guest',
    location: 'Bodh Gaya',
    type: 'Monastery',
    price: '1,200',
    description:
      'Beautiful Thai-style architecture and deeply peaceful accommodations for pilgrims who prefer simplicity over indulgence.',
    whatsapp: '+917782019833',
    filter: 'Bodh Gaya',
    mood: 'Minimal and devotional',
  },
  {
    name: 'Nalanda Heritage Inn',
    location: 'Nalanda',
    type: 'Hotel',
    price: '3,800',
    description:
      'A practical heritage-leaning stay close to the ruins, ideal for travelers prioritizing access, ease, and historical atmosphere.',
    whatsapp: '+917782019833',
    filter: 'Nalanda',
    mood: 'Close to key sites',
  },
]

const filters = ['All Locations', 'Bodh Gaya', 'Nalanda', 'Rajgir', 'Vaishali']
const monasteryRules = [
  'Observe noble silence during designated evening and early morning hours.',
  'Wear modest clothing within monastery premises and prayer halls.',
  'Avoid alcohol and non-vegetarian food in shared guest areas.',
]

const Stays = () => {
  const [active, setActive] = useState('All Locations')

  const filtered =
    active === 'All Locations'
      ? stays
      : stays.filter((stay) => stay.filter === active)

  return (
    <div className="page stays-page">
      <PageMeta
        title="Stays | BodhiBihar"
        description="Browse monastery guest houses and hotels across the Bihar Buddhist circuit, with pricing guidance and inquiry support."
      />

      <section className="page-hero">
        <div className="page-shell page-hero__grid">
          <div>
            <p className="page-kicker">Sacred Residences</p>
            <h1>
              Places to stay
              <span> in noble silence</span>
            </h1>
          </div>
          <div className="page-hero__aside">
            <p>
              Choose between monastic guest houses and comfortable hotels, depending
              on whether your journey needs greater simplicity, convenience, or rest.
            </p>
            <div className="page-hero__mini-stats">
              <div>
                <strong>2</strong>
                <span>Stay styles</span>
              </div>
              <div>
                <strong>6</strong>
                <span>Curated options</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-shell page-filters">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActive(filter)}
            className={`page-filter${active === filter ? ' page-filter--active' : ''}`}
          >
            {filter}
          </button>
        ))}
      </section>

      <section className="page-shell stays-grid">
        {filtered.length > 0 ? (
          filtered.map((stay) => (
            <article key={stay.name} className="stay-card">
              <div className="stay-card__media">
                <span
                  className={`stay-card__type${
                    stay.type === 'Monastery' ? ' stay-card__type--monastery' : ''
                  }`}
                >
                  {stay.type}
                </span>
                <div className="stay-card__halo" />
                <p>{stay.mood}</p>
              </div>

              <div className="stay-card__content">
                <div className="stay-card__header">
                  <div>
                    <h2>{stay.name}</h2>
                    <span>{stay.location}</span>
                  </div>
                  <strong>Rs. {stay.price}</strong>
                </div>

                <p className="stay-card__description">{stay.description}</p>

                <p className="stay-card__price-note">Indicative price per night. Subject to season and availability.</p>

                <a
                  href={createWhatsAppLink(`Hello BodhiBihar, I am interested in staying at ${stay.name}. Please share availability and details.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="stay-card__link"
                >
                  Inquiry via WhatsApp
                </a>
              </div>
            </article>
          ))
        ) : (
          <div className="empty-state">
            <p className="page-kicker">No Listed Stays Yet</p>
            <h2>We have not published stay options for this stop.</h2>
            <p>
              Ask us directly and we can suggest available monastery guest houses or
              hotels based on your dates and comfort level.
            </p>
            <a
              href={createWhatsAppLink(`Hello BodhiBihar, I need stay options for ${active}. Please share recommendations.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="home-button home-button--primary"
            >
              Request Options
            </a>
          </div>
        )}
      </section>

      <section className="page-shell stays-guidelines">
        <div className="stays-guidelines__quote">
          <p>Silence is not just the absence of sound, but the presence of self.</p>
          <span>Dharma Rule</span>
        </div>

        <div className="stays-guidelines__content">
          <p className="page-kicker page-kicker--light">Guidelines for Sacred Living</p>
          <h3>Staying well in monastery spaces means matching the rhythm of the place.</h3>
          <p>
            Guest houses attached to monasteries can be deeply rewarding, but they
            work best when travelers arrive ready to respect simplicity, routine,
            and shared quiet.
          </p>

          <div className="stays-guidelines__rules">
            {monasteryRules.map((rule, index) => (
              <div key={rule}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <p>{rule}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Stays
