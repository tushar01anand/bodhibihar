const Home = () => {
  return (
    <div className="bg-cream min-h-screen">

      <section
        style={{
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #2C2416 0%, #6B4C2A 50%, #E8841A 100%)',
          position: 'relative',
          display: 'flex',
          alignItems: 'flex-end',
          paddingBottom: '80px',
          paddingLeft: '48px',
          paddingRight: '48px',
        }}
      >

        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(44, 36, 22, 0.4)',
          }}
        />

        <div style={{ position: 'relative', zIndex: 10, maxWidth: '700px' }}>

          <p style={{
            color: '#FAF6F0',
            fontSize: '11px',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            marginBottom: '16px',
            opacity: 0.8,
          }}>
            The Spiritual Heart of India
          </p>

          <h1 style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: '72px',
            color: '#FAF6F0',
            lineHeight: 1.1,
            marginBottom: '24px',
            fontWeight: 500,
          }}>
            Walk the Path of <br />
            <span style={{ color: '#E8841A', fontStyle: 'italic' }}>
              Enlightenment
            </span>
          </h1>

          <p style={{
            color: '#FAF6F0',
            fontSize: '18px',
            fontWeight: 300,
            opacity: 0.8,
            marginBottom: '40px',
            maxWidth: '520px',
            lineHeight: 1.7,
          }}>
            Bihar's sacred Buddhist circuit — Bodh Gaya, Nalanda, Rajgir, Vaishali. A journey into the silence of being.
          </p>

          <div style={{ display: 'flex', gap: '16px' }}>

            <a
              href="/destinations"
              style={{
                backgroundColor: '#E8841A',
                color: '#FAF6F0',
                padding: '16px 32px',
                fontSize: '12px',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                display: 'inline-block',
              }}
            >
              Explore Destinations
            </a>

            <a
              href="/itinerary"
              style={{
                border: '1px solid #FAF6F0',
                color: '#FAF6F0',
                padding: '16px 32px',
                fontSize: '12px',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                display: 'inline-block',
              }}
            >
              Plan My Journey
            </a>

          </div>

        </div>
      </section>
{/* Sacred Four Section */}
<section style={{ backgroundColor: '#FAF6F0', padding: '100px 48px' }}>

  <p style={{ fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#6B4C2A', marginBottom: '12px' }}>
    Sacred Gateways
  </p>

  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '48px' }}>
    <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '48px', color: '#2C2416', fontWeight: 500 }}>
      The Sacred Four
    </h2>
    <p style={{ maxWidth: '300px', color: '#6B4C2A', fontSize: '14px', lineHeight: 1.7, textAlign: 'right' }}>
      Four pillars of wisdom where the Buddha lived, taught, and transcended.
    </p>
  </div>

  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px' }}>
    {[
      { name: 'Bodh Gaya', tagline: 'The Epicenter of Enlightenment', color: '#2C2416' },
      { name: 'Nalanda', tagline: 'Wisdom of the Ancient World', color: '#6B4C2A' },
      { name: 'Rajgir', tagline: 'The Royal Abode of Peace', color: '#4A3520' },
      { name: 'Vaishali', tagline: 'Birthplace of Democracy & Monastic Peace', color: '#3D2C1A' },
    ].map((dest) => (
      <div
        key={dest.name}
        style={{
          backgroundColor: dest.color,
          padding: '48px',
          cursor: 'pointer',
          minHeight: '280px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
        }}
      >
        <h3 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '36px', color: '#FAF6F0', marginBottom: '8px' }}>
          {dest.name}
        </h3>
        <p style={{ color: '#FAF6F0', opacity: 0.7, fontSize: '13px', letterSpacing: '0.05em' }}>
          {dest.tagline}
        </p>
        <p style={{ color: '#E8841A', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', marginTop: '16px' }}>
          Explore →
        </p>
      </div>
    ))}
  </div>

</section>
    </div>
  )
}

export default Home