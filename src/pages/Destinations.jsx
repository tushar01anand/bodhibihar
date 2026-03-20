import { useState } from 'react'

const destinations = [
  {
    name: 'Bodh Gaya',
    tagline: 'The Epicenter of Enlightenment',
    description: 'The most sacred Buddhist site in the world. Where Siddhartha Gautama attained enlightenment under the Bodhi Tree.',
    color: '#2C2416',
    filter: 'Bodh Gaya',
  },
  {
    name: 'Nalanda',
    tagline: 'Wisdom of the Ancient World',
    description: 'The ancient seat of learning and philosophical discourse. Home to the world\'s first residential university.',
    color: '#6B4C2A',
    filter: 'Nalanda',
  },
  {
    name: 'Rajgir',
    tagline: 'The Royal Abode of Peace',
    description: 'The ancient capital where the Buddha taught for many years. Surrounded by five hills of extraordinary beauty.',
    color: '#4A3520',
    filter: 'Rajgir',
  },
  {
    name: 'Vaishali',
    tagline: 'Birthplace of Democracy & Monastic Peace',
    description: 'One of the first democratic republics in the world. Where the Buddha delivered his last sermon.',
    color: '#3D2C1A',
    filter: 'Vaishali',
  },
]

const Destinations = () => {
  const [active, setActive] = useState('All')

  const filtered = active === 'All'
    ? destinations
    : destinations.filter((d) => d.filter === active)

  return (
    <div style={{ backgroundColor: '#FAF6F0', minHeight: '100vh', paddingTop: '80px' }}>

      {/* Header */}
      <section style={{ padding: '80px 48px 48px' }}>
        <p style={{ fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#6B4C2A', marginBottom: '12px' }}>
          Sacred Sites
        </p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <h1 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '64px', color: '#2C2416', fontWeight: 500, lineHeight: 1.1 }}>
            Timeless<br />
            <span style={{ fontStyle: 'italic' }}>Sanctuaries</span>
          </h1>
          <p style={{ maxWidth: '300px', color: '#6B4C2A', fontSize: '14px', lineHeight: 1.8, textAlign: 'right' }}>
            Embark on a path of spiritual discovery across the cradle of ancient wisdom and enlightenment.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section style={{ padding: '0 48px 48px' }}>
        <div style={{ display: 'flex', gap: '4px' }}>
          {['All', 'Bodh Gaya', 'Nalanda', 'Rajgir', 'Vaishali'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActive(filter)}
              style={{
                padding: '8px 20px',
                fontSize: '11px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                border: 'none',
                cursor: 'pointer',
                backgroundColor: active === filter ? '#E8841A' : 'transparent',
                color: active === filter ? '#FAF6F0' : '#6B4C2A',
                borderBottom: active === filter ? 'none' : '1px solid #E8DDD0',
              }}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      {/* Destinations Grid */}
      <section style={{ padding: '0 48px 100px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: filtered.length === 1 ? '1fr' : '1fr 1fr', gap: '2px' }}>
          {filtered.map((dest) => (
            <div
              key={dest.name}
              style={{
                backgroundColor: dest.color,
                padding: '64px 48px',
                minHeight: '320px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                cursor: 'pointer',
              }}
            >
              <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '42px', color: '#FAF6F0', marginBottom: '8px' }}>
                {dest.name}
              </h2>
              <p style={{ color: '#E8841A', fontSize: '12px', letterSpacing: '0.1em', marginBottom: '12px' }}>
                {dest.tagline}
              </p>
              <p style={{ color: '#FAF6F0', opacity: 0.6, fontSize: '13px', lineHeight: 1.8, marginBottom: '24px', maxWidth: '380px' }}>
                {dest.description}
              </p>
              <p style={{ color: '#E8841A', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                Explore →
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section style={{ backgroundColor: '#2C2416', padding: '80px 48px', textAlign: 'center' }}>
        <p style={{ fontSize: '24px', marginBottom: '16px' }}>🙏</p>
        <h3 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '36px', color: '#FAF6F0', marginBottom: '32px' }}>
          Join our silent newsletter for curated pilgrimage insights.
        </h3>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <input
            type="email"
            placeholder="Your essence (Email)"
            style={{
              padding: '14px 24px',
              fontSize: '13px',
              border: '1px solid rgba(255,255,255,0.2)',
              backgroundColor: 'transparent',
              color: '#FAF6F0',
              width: '320px',
              outline: 'none',
            }}
          />
          <button style={{
            padding: '14px 28px',
            backgroundColor: '#E8841A',
            color: '#FAF6F0',
            border: 'none',
            fontSize: '11px',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            cursor: 'pointer',
          }}>
            Subscribe
          </button>
        </div>
      </section>

    </div>
  )
}

export default Destinations