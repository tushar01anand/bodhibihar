const days = [
  {
    number: '01',
    location: 'BODH GAYA',
    title: 'The Great Awakening',
    activities: [
      'Guided tour of Mahabodhi Temple complex',
      'Meditation session under the sacred Bodhi Tree',
      'Evening chanting ceremony at the Monastery',
    ],
    tip: 'Early morning at 5 AM is the best time for meditation when the atmosphere is charged with collective silence.',
  },
  {
    number: '02',
    location: 'RAJGIR',
    title: "Vulture's Peak Heights",
    activities: [
      'Ropeway ride to Shanti Stupa',
      "Silent walk to Gridhakuta Hill (Vulture's Peak)",
      "Explore Bimbisara's Jail and Hot Springs",
    ],
    tip: 'Wear comfortable walking shoes as the ascent to the peak involves a gentle but steady climb on paved paths.',
  },
  {
    number: '03',
    location: 'NALANDA',
    title: 'Echoes of Ancient Wisdom',
    activities: [
      'Visit Nalanda University archaeological ruins',
      'Explore the Nalanda Archaeological Museum',
      'Huen Tsang Memorial Hall visit',
    ],
    tip: 'Hire an official guide at the gate to truly understand the complex architectural and historical layers of this site.',
  },
  {
    number: '04',
    location: 'VAISHALI',
    title: 'The Relic Stupa',
    activities: [
      'Visit the Ashoka Pillar at Kolhua',
      'Abhishek Pushkarni (Coronation Tank)',
      'Vishwa Shanti Stupa exploration',
    ],
    tip: 'Vaishali is peaceful and quiet. Carry some water as the sites are spread out amidst local villages.',
  },
  {
    number: '05',
    location: 'PATNA',
    title: 'Reflection & Departure',
    activities: [
      'Visit the Buddha Smriti Park and Museum',
      'Stroll through the Patliputra ruins',
      'Transfer to Patna Airport',
    ],
    tip: 'Pick up local Madhubani paintings as a spiritual souvenir before your flight.',
  },
];

const Itinerary = () => {
  return (
    <div style={{ backgroundColor: '#FAF6F0', minHeight: '100vh', paddingTop: '80px' }}>

      {/* Header */}
      <section style={{ padding: '80px 48px 64px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'start' }}>
        <div>
          <p style={{ fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#6B4C2A', marginBottom: '12px' }}>
            A 5-Day Spiritual Pilgrimage
          </p>
          <h1 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '64px', color: '#2C2416', fontWeight: 500, lineHeight: 1.1, marginBottom: '24px' }}>
            The Path of<br />
            <span style={{ fontStyle: 'italic' }}>Enlightenment</span>
          </h1>
          <p style={{ color: '#6B4C2A', fontSize: '15px', lineHeight: 1.9, maxWidth: '480px' }}>
            A meticulously curated journey through the sacred lands where the Buddha walked, taught, and attained Nirvana. Experience deep serenity in the heart of Bihar.
          </p>
        </div>

        {/* Quote card */}
        <div style={{ backgroundColor: '#2C2416', padding: '48px', marginTop: '40px' }}>
          <p style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '22px', color: '#FAF6F0', fontStyle: 'italic', lineHeight: 1.7, marginBottom: '24px' }}>
            "Peace comes from within. Do not seek it without."
          </p>
          <p style={{ color: '#E8841A', fontSize: '11px', letterSpacing: '0.2em' }}>— GAUTAMA BUDDHA</p>
        </div>
      </section>

      {/* Days + Sidebar */}
      <section style={{ padding: '0 48px 100px', display: 'grid', gridTemplateColumns: '1fr 320px', gap: '64px', alignItems: 'start' }}>

        {/* Days */}
        <div>
          {days.map((day) => (
            <div
              key={day.number}
              style={{ borderTop: '1px solid #E8DDD0', paddingTop: '48px', marginBottom: '48px' }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px' }}>
                <div>
                  <p style={{ color: '#E8841A', fontSize: '11px', letterSpacing: '0.3em', marginBottom: '4px' }}>
                    {day.number}
                  </p>
                  <p style={{ fontSize: '10px', letterSpacing: '0.25em', color: '#6B4C2A', marginBottom: '12px' }}>
                    {day.location}
                  </p>
                  <h3 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '32px', color: '#2C2416', marginBottom: '20px' }}>
                    {day.title}
                  </h3>
                  <p style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#6B4C2A', marginBottom: '12px' }}>
                    Activities
                  </p>
                  {day.activities.map((act) => (
                    <p key={act} style={{ color: '#2C2416', fontSize: '13px', lineHeight: 1.8, marginBottom: '6px' }}>
                      • {act}
                    </p>
                  ))}
                </div>
                <div style={{ backgroundColor: '#F2EBE0', padding: '24px' }}>
                  <p style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#E8841A', marginBottom: '12px' }}>
                    Travel Tip
                  </p>
                  <p style={{ color: '#6B4C2A', fontSize: '13px', lineHeight: 1.8 }}>
                    {day.tip}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sticky Sidebar */}
        <div style={{ position: 'sticky', top: '100px' }}>
          <div style={{ backgroundColor: '#2C2416', padding: '40px' }}>
            <p style={{ color: '#E8841A', fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '16px' }}>
              Reserve Your Seat
            </p>
            <p style={{ color: '#FAF6F0', opacity: 0.7, fontSize: '13px', lineHeight: 1.7, marginBottom: '32px' }}>
              Experience the sacred trail with our expert spiritual guides.
            </p>

            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px', marginBottom: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                <p style={{ color: '#FAF6F0', opacity: 0.5, fontSize: '12px', letterSpacing: '0.1em' }}>DURATION</p>
                <p style={{ color: '#FAF6F0', fontSize: '12px' }}>5 Days, 4 Nights</p>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <p style={{ color: '#FAF6F0', opacity: 0.5, fontSize: '12px', letterSpacing: '0.1em' }}>STARTS FROM</p>
                <p style={{ color: '#E8841A', fontSize: '14px', fontFamily: 'Cormorant Garamond, Georgia, serif' }}>₹32,500 / person</p>
              </div>
            </div>

            {/* FIXED BUTTON 1 */}
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'block',
                backgroundColor: '#E8841A',
                color: '#FAF6F0',
                padding: '16px',
                textAlign: 'center',
                fontSize: '11px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                marginBottom: '12px',
              }}
            >
              Book This Journey
            </a>

            {/* FIXED BUTTON 2 */}
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'block',
                border: '1px solid rgba(255,255,255,0.2)',
                color: '#FAF6F0',
                padding: '14px',
                textAlign: 'center',
                fontSize: '11px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                textDecoration: 'none',
              }}
            >
              WhatsApp Inquiry
            </a>
          </div>
        </div>

      </section>

    </div>
  );
};

export default Itinerary;