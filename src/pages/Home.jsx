const Home = () => {
  return (
    <div className="bg-cream min-h-screen">

      {/* Hero Section */}
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

      {/* Why BodhiBihar Section */}
      <section style={{ backgroundColor: '#2C2416', padding: '100px 48px' }}>

        <p style={{ fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#E8841A', marginBottom: '12px' }}>
          Why Choose Us
        </p>

        <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '48px', color: '#FAF6F0', fontWeight: 500, marginBottom: '64px' }}>
          Why <span style={{ color: '#E8841A', fontStyle: 'italic' }}>BodhiBihar</span>
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '48px' }}>
          {[
            {
              number: '01',
              title: 'Authentic Itineraries',
              desc: 'Crafted by spiritual guides and historians to ensure depth and historical accuracy.',
            },
            {
              number: '02',
              title: 'Curated Stays',
              desc: 'From modern comfort to traditional monasteries, we select stays that nurture the soul.',
            },
            {
              number: '03',
              title: 'Multilingual Support',
              desc: 'Guides speaking 12 languages — Japanese, Thai, Chinese, and more.',
            },
          ].map((item) => (
            <div key={item.number}>
              <p style={{ color: '#E8841A', fontSize: '11px', letterSpacing: '0.3em', marginBottom: '20px' }}>
                {item.number}
              </p>
              <h3 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '26px', color: '#FAF6F0', marginBottom: '16px' }}>
                {item.title}
              </h3>
              <p style={{ color: '#FAF6F0', opacity: 0.6, fontSize: '14px', lineHeight: 1.8 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </section>

      {/* Featured Itinerary Section */}
      <section style={{ backgroundColor: '#FAF6F0', padding: '100px 48px' }}>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>

          {/* Left — dark card */}
          <div style={{
            backgroundColor: '#2C2416',
            padding: '64px',
            position: 'relative',
            minHeight: '400px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
          }}>
            <p style={{ color: '#E8841A', fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '16px' }}>
              Featured Itinerary
            </p>
            <h3 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '40px', color: '#FAF6F0', marginBottom: '24px', lineHeight: 1.2 }}>
              The 5-Day Bihar Buddhist Circuit
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '32px' }}>
              {[
                'Day 1–2: Awakening in Bodh Gaya',
                'Day 3: The Wisdom of Nalanda & Rajgir',
                'Day 4: Peace at Vaishali',
                'Day 5: Reflection & Departure',
              ].map((day) => (
                <p key={day} style={{ color: '#FAF6F0', opacity: 0.7, fontSize: '13px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '10px' }}>
                  — {day}
                </p>
              ))}
            </div>

            <a
              href="/itinerary"
              style={{
                backgroundColor: '#E8841A',
                color: '#FAF6F0',
                padding: '14px 28px',
                fontSize: '11px',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                display: 'inline-block',
              }}
            >
              View Full Details →
            </a>
          </div>

          {/* Right — text */}
          <div>
            <p style={{ fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#6B4C2A', marginBottom: '16px' }}>
              A Sacred Journey
            </p>
            <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '48px', color: '#2C2416', fontWeight: 500, marginBottom: '24px', lineHeight: 1.2 }}>
              A Definitive Journey Through Sacred Bihar
            </h2>
            <p style={{ color: '#6B4C2A', fontSize: '15px', lineHeight: 1.9, marginBottom: '32px' }}>
              A curated path covering the most sacred sites. This journey balances historical depth with personal reflection.
            </p>
            <div style={{ display: 'flex', gap: '48px' }}>
              <div>
                <p style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '36px', color: '#E8841A' }}>5</p>
                <p style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#6B4C2A' }}>Days</p>
              </div>
              <div>
                <p style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '36px', color: '#E8841A' }}>4</p>
                <p style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#6B4C2A' }}>Sacred Sites</p>
              </div>
              <div>
                <p style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '36px', color: '#E8841A' }}>₹32,500</p>
                <p style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#6B4C2A' }}>Per Person</p>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  )
}

export default Home