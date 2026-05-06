import { useState } from 'react'
import PageMeta from '../components/PageMeta'

const destinations = [
  {
    name: 'Bodh Gaya',
    tagline: 'The epicenter of enlightenment',
    description:
      'The most sacred Buddhist site in the world, where Siddhartha Gautama attained enlightenment beneath the Bodhi Tree.',
    image: '/bodhgaya.jpg',
    filter: 'Bodh Gaya',
    accent: 'Mahabodhi Temple',
    rhythm: 'Dawn meditation, monastery circuits, evening chants',
  },
  {
    name: 'Nalanda',
    tagline: 'Wisdom of the ancient world',
    description:
      "The great seat of Buddhist learning, where scholarship, debate, and disciplined monastic life shaped centuries of thought.",
    image: '/nalanda.jpg',
    filter: 'Nalanda',
    accent: 'Ancient University',
    rhythm: 'Ruins, museum walks, layered historical storytelling',
  },
  {
    name: 'Rajgir',
    tagline: 'The royal abode of peace',
    description:
      'An ancient capital ringed by hills, caves, ropeways, and the landscapes where the Buddha often taught and reflected.',
    image: '/rajgir.jpg',
    filter: 'Rajgir',
    accent: 'Gridhakuta Hill',
    rhythm: 'Hill trails, ropeway rides, panoramic silence',
  },
  {
    name: 'Vaishali',
    tagline: 'Monastic calm and democratic memory',
    description:
      'A place of relic stupas, Ashokan history, and the Buddha’s final sermon, carried by a gentler, village-lined pace.',
    image: '/vaishali.jpg',
    filter: 'Vaishali',
    accent: 'Relic Stupa',
    rhythm: 'Quiet heritage stops, rural calm, open skies',
  },
]

const filters = ['All', 'Bodh Gaya', 'Nalanda', 'Rajgir', 'Vaishali']

const Destinations = () => {
  const [active, setActive] = useState('All')

  const filtered =
    active === 'All'
      ? destinations
      : destinations.filter((destination) => destination.filter === active)

  return (
    <div className="page destinations-page">
      <PageMeta
        title="Destinations | BodhiBihar"
        description="Explore Bodh Gaya, Nalanda, Rajgir, and Vaishali as part of a mindful Buddhist circuit journey across Bihar."
      />

      <section className="page-hero">
        <div className="page-shell page-hero__grid">
          <div>
            <p className="page-kicker">Sacred Sites</p>
            <h1>
              Timeless sanctuaries
              <span> across sacred Bihar</span>
            </h1>
          </div>
          <div className="page-hero__aside">
            <p>
              Follow the geography of awakening through temple towns, ancient
              universities, and hill landscapes that still hold contemplative
              energy.
            </p>
            <div className="page-hero__mini-stats">
              <div>
                <strong>4</strong>
                <span>Core stops</span>
              </div>
              <div>
                <strong>1</strong>
                <span>Living circuit</span>
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

      <section className="page-shell destinations-grid">
        {filtered.map((dest) => (
          <article
            key={dest.name}
            className="destination-feature"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(25, 20, 14, 0.12), rgba(25, 20, 14, 0.9)), url(${dest.image})`,
            }}
          >
            <div className="destination-feature__top">
              <p className="destination-feature__label">{dest.accent}</p>
              <p className="destination-feature__rhythm">{dest.rhythm}</p>
            </div>

            <div className="destination-feature__body">
              <p className="destination-feature__tagline">{dest.tagline}</p>
              <h2>{dest.name}</h2>
              <p>{dest.description}</p>
              <span>Ideal for reflection, learning, and slow travel</span>
            </div>
          </article>
        ))}
      </section>

      <section className="page-shell destinations-note">
        <div className="destinations-note__panel">
          <div>
            <p className="page-kicker">Travel Note</p>
            <h3>Choose fewer stops, stay longer, and let each site open gradually.</h3>
          </div>
          <p>
            The circuit is most meaningful when it leaves room for silence,
            unexpected conversations, and repeated visits to the same sacred
            places at different hours of the day.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Destinations
