import { useState } from 'react'

const stays = [
  {
    name: 'Root Institute',
    location: 'Bodh Gaya, Bihar',
    type: 'MONASTERY',
    price: '2,400',
    description: 'A center for Buddhist meditation and study, offering simple, clean rooms amidst lush gardens. Perfect for long-term retreat.',
    whatsapp: '+917782019833',
    filter: 'Bodh Gaya',
  },
  {
    name: 'The Royal Residency',
    location: 'Bodh Gaya',
    type: 'HOTEL',
    price: '8,500',
    description: 'Japanese-inspired hospitality focused on silence and comfort. Features a traditional Zen garden and communal meditation hall.',
    whatsapp: '+917782019833',
    filter: 'Bodh Gaya',
  },
  {
    name: 'Tergar Guest House',
    location: 'Bodh Gaya',
    type: 'MONASTERY',
    price: '1,800',
    description: 'Stay within the vibrant Tibetan community. Tergar provides an authentic monastic experience with modern basic amenities.',
    whatsapp: '+917782019833',
    filter: 'Bodh Gaya',
  },
  {
    name: 'Vishwa Shanti Lodge',
    location: 'Rajgir',
    type: 'HOTEL',
    price: '4,200',
    description: 'Nestled near the Gridhakuta Hill, this boutique lodge offers panoramic views and organic vegetarian cuisine.',
    whatsapp: '+917782019833',
    filter: 'Rajgir',
  },
  {
    name: 'Thai Monastery Guest',
    location: 'Bodh Gaya',
    type: 'MONASTERY',
    price: '1,200',
    description: 'Beautifully maintained Thai-style architecture. Offers austere but deeply peaceful accommodations for pilgrims.',
    whatsapp: '+917782019833',
    filter: 'Bodh Gaya',
  },
  {
    name: 'Nalanda Heritage Inn',
    location: 'Nalanda',
    type: 'HOTEL',
    price: '3,800',
    description: 'Located just minutes from the Nalanda University ruins, combining historic charm with modern hospitality.',
    whatsapp: '+917782019833',
    filter: 'Nalanda',
  },
]

const Stays = () => {
  const [active, setActive] = useState('All Locations')

  const filtered = active === 'All Locations'
    ? stays
    : stays.filter((s) => s.filter === active)

  return (
    <div style={{ backgroundColor: '#FAF6F0', minHeight: '100vh', paddingTop: '80px' }}>

      {/* Header */}
      <section style={{ padding: '80px 48px 48px' }}>
        <p style={{ fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#6B4C2A', marginBottom: '12px' }}>
          Sacred Residences
        </p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '24px' }}>
          <h1 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(36px, 6vw, 64px)', color: '#2C2416', fontWeight: 500, lineHeight: 1.1 }}>
            Find Sanctuary in<br />
            <span style={{ color: '#E8841A', fontStyle: 'italic' }}>Noble Silence</span>
          </h1>
          <p style={{ maxWidth: '300px', color: '#6B4C2A', fontSize: '14px', lineHeight: 1.8 }}>
            From monastic guest houses to refined heritage stays, choose a dwelling that honors your inner journey.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section style={{ padding: '0 48px 48px' }}>
        <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
          {['All Locations', 'Bodh Gaya', 'Nalanda', 'Rajgir', 'Vaishali'].map((filter) => (
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

      {/* Stays Grid */}
      <section style={{ padding: '0 48px 80px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '24px',
        }}>
          {filtered.map((stay) => (
            <div
              key={stay.name}
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #E8DDD0',
                overflow: 'hidden',
              }}
            >
              {/* Image Placeholder */}
              <div style={{
                height: '200px',
                backgroundColor: '#2C2416',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
              }}>
                <span style={{
                  position: 'absolute',
                  top: '12px',
                  left: '12px',
                  backgroundColor: stay.type === 'MONASTERY' ? '#E8841A' : '#6B4C2A',
                  color: '#FAF6F0',
                  fontSize: '9px',
                  letterSpacing: '0.2em',
                  padding: '4px 10px',
                }}>
                  {stay.type}
                </span>
                <p style={{ color: '#FAF6F0', opacity: 0.2, fontSize: '48px' }}>🙏</p>
              </div>

              {/* Content */}
              <div style={{ padding: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                  <h3 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '22px', color: '#2C2416' }}>
                    {stay.name}
                  </h3>
                  <p style={{ color: '#E8841A', fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '18px', whiteSpace: 'nowrap' }}>
                    Rs. {stay.price}
                  </p>
                </div>

                <p style={{ color: '#6B4C2A', fontSize: '11px', letterSpacing: '0.1em', marginBottom: '12px' }}>
                  📍 {stay.location}
                </p>

                <p style={{ color: '#6B4C2A', fontSize: '13px', lineHeight: 1.8, marginBottom: '20px' }}>
                  {stay.description}
                </p>

                {/* Fixed WhatsApp Inquiry Button */}
                <a
                  href={"https://wa.me/" + stay.whatsapp + "?text=Interested in " + stay.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'block',
                    border: '1px solid #E8841A',
                    color: '#E8841A',
                    padding: '12px',
                    textAlign: 'center',
                    fontSize: '11px',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                  }}
                >
                  Inquiry via WhatsApp
                </a>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Guidelines */}
      <section style={{ backgroundColor: '#2C2416', padding: '80px 48px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>
          <div style={{ backgroundColor: '#3D2C1A', padding: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '280px' }}>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '48px', marginBottom: '16px' }}>🙏</p>
              <p style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '18px', color: '#FAF6F0', fontStyle: 'italic', lineHeight: 1.7 }}>
                Silence is not just the absence of sound, but the presence of self.
              </p>
              <p style={{ color: '#E8841A', fontSize: '11px', letterSpacing: '0.2em', marginTop: '16px' }}>— DHARMA RULE</p>
            </div>
          </div>

          <div>
            <h3 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '40px', color: '#FAF6F0', marginBottom: '24px' }}>
              Guidelines for Sacred Living
            </h3>
            <p style={{ color: '#FAF6F0', opacity: 0.6, fontSize: '14px', lineHeight: 1.9, marginBottom: '24px' }}>
              Staying in a monastery guesthouse is a unique opportunity to live according to ancient rhythms. We ask all guests to respect local traditions.
            </p>

            {[
              'Observe noble silence during designated evening and early morning hours',
              'Modest attire is required within all monastery premises',
              'Alcohol and non-vegetarian foods are prohibited in guest wings',
            ].map((rule) => (
              <div key={rule} style={{ display: 'flex', gap: '12px', marginBottom: '16px', alignItems: 'flex-start' }}>
                <span style={{ color: '#E8841A', fontSize: '16px' }}>✓</span>
                <p style={{ color: '#FAF6F0', opacity: 0.7, fontSize: '13px', lineHeight: 1.7 }}>{rule}</p>
              </div>
            ))}

          </div>
        </div>
      </section>
    </div>
  )
}

export default Stays