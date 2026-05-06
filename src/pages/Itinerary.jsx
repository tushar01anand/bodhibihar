import { Link } from 'react-router-dom'
import PageMeta from '../components/PageMeta'
import { createWhatsAppLink } from '../lib/contact'

const days = [
  {
    number: '01',
    location: 'Bodh Gaya',
    title: 'The Great Awakening',
    activities: [
      'Guided tour of the Mahabodhi Temple complex',
      'Meditation beneath the sacred Bodhi Tree',
      'Evening chanting ceremony at the monastery',
    ],
    tip: 'Arrive before sunrise if possible. The first light and soft chanting make the site feel unusually intimate.',
  },
  {
    number: '02',
    location: 'Rajgir',
    title: "Vulture's Peak Heights",
    activities: [
      'Ropeway ride to the Shanti Stupa',
      "Silent walk to Gridhakuta Hill, the Buddha's teaching site",
      "Explore Bimbisara's Jail and the hot springs",
    ],
    tip: 'Wear steady walking shoes and keep water with you. Rajgir is best experienced slowly rather than as a single sprint.',
  },
  {
    number: '03',
    location: 'Nalanda',
    title: 'Echoes of Ancient Wisdom',
    activities: [
      'Visit the Nalanda University archaeological ruins',
      'Explore the Nalanda Archaeological Museum',
      'Stop at Hiuen Tsang Memorial Hall',
    ],
    tip: 'An official guide adds real value here because the meaning of the site comes alive through context, not just scale.',
  },
  {
    number: '04',
    location: 'Vaishali',
    title: 'The Relic Stupa',
    activities: [
      'Visit the Ashoka Pillar at Kolhua',
      'Walk around Abhishek Pushkarni',
      'Spend quiet time near the Vishwa Shanti Stupa',
    ],
    tip: 'Sites are spread apart and the landscape is open, so lighter midday plans work better than back-to-back visits.',
  },
  {
    number: '05',
    location: 'Patna',
    title: 'Reflection and Departure',
    activities: [
      'Visit Buddha Smriti Park and museum spaces',
      'Optional stop near the old Patliputra area',
      'Transfer onward for departure',
    ],
    tip: 'Keep the final day spacious so the journey ends gently rather than feeling like a rushed checkout sequence.',
  },
]

const Itinerary = () => {
  return (
    <div className="page itinerary-page">
      <PageMeta
        title="Itinerary | BodhiBihar"
        description="See a sample 5-day BodhiBihar route through Bodh Gaya, Rajgir, Nalanda, Vaishali, and Patna."
      />

      <section className="page-hero">
        <div className="page-shell itinerary-hero">
          <div>
            <p className="page-kicker">A 5-Day Spiritual Pilgrimage</p>
            <h1>
              The path of
              <span> enlightenment</span>
            </h1>
            <p className="page-hero__summary">
              A thoughtfully paced route through the landscapes where the Buddha
              walked, taught, and awakened, with room for devotion, history, and rest.
            </p>
          </div>

          <aside className="itinerary-quote">
            <p>
              “Peace comes from within. Do not seek it without.”
            </p>
            <span>Gautama Buddha</span>
          </aside>
        </div>
      </section>

      <section className="page-shell itinerary-layout">
        <div className="itinerary-timeline">
          {days.map((day) => (
            <article key={day.number} className="itinerary-day">
              <div className="itinerary-day__header">
                <div className="itinerary-day__marker">
                  <span>{day.number}</span>
                </div>
                <div>
                  <p className="itinerary-day__location">{day.location}</p>
                  <h2>{day.title}</h2>
                </div>
              </div>

              <div className="itinerary-day__body">
                <div>
                  <p className="itinerary-day__label">Day Rhythm</p>
                  <div className="itinerary-day__activities">
                    {day.activities.map((activity) => (
                      <p key={activity}>{activity}</p>
                    ))}
                  </div>
                </div>

                <div className="itinerary-tip">
                  <p className="itinerary-day__label">Travel Tip</p>
                  <p>{day.tip}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <aside className="itinerary-sidebar">
          <div className="itinerary-sidebar__card">
            <p className="page-kicker page-kicker--light">Reserve Your Seat</p>
            <h3>A complete circuit for first-time pilgrims.</h3>
            <p>
              Guided routing, accommodation suggestions, and a pace that leaves
              time for both devotion and recovery.
            </p>

            <div className="itinerary-sidebar__stats">
              <div>
                <span>Duration</span>
                <strong>5 Days, 4 Nights</strong>
              </div>
              <div>
                <span>Starts From</span>
                <strong>Rs. 32,500 / person</strong>
              </div>
            </div>

            <p className="itinerary-sidebar__note">
              Starting price only. Final quotes depend on date, stay category, vehicle, and group size.
            </p>

            <a
              href={createWhatsAppLink('Hello BodhiBihar, I am interested in the 5-day Buddhist circuit itinerary. Please share the detailed quote and inclusions.')}
              target="_blank"
              rel="noopener noreferrer"
              className="home-button home-button--primary"
            >
              Book This Journey
            </a>
            <a
              href={createWhatsAppLink('Hello BodhiBihar, I have a question about the 5-day itinerary.')}
              target="_blank"
              rel="noopener noreferrer"
              className="itinerary-sidebar__secondary"
            >
              WhatsApp Inquiry
            </a>
            <Link to="/contact" className="itinerary-sidebar__secondary">
              Share Trip Brief
            </Link>
          </div>
        </aside>
      </section>

      <section className="home-cta itinerary-cta">
        <div className="page-shell home-cta__panel">
          <div>
            <p className="page-kicker">Make It Yours</p>
            <h2>Use this 5-day circuit as a base, then adjust the rhythm around your dates and intent.</h2>
          </div>
          <div className="home-cta__actions">
            <Link
              to={`/contact?tripType=${encodeURIComponent('Buddhist circuit')}&notes=${encodeURIComponent('I am interested in the 5-day BodhiBihar circuit and would like help adapting it to my dates, pace, and stay preferences.')}`}
              className="home-button home-button--primary"
            >
              Plan This Journey
            </Link>
            <a
              href={createWhatsAppLink('Hello BodhiBihar, I would like to adapt the 5-day circuit to my dates and travel style.')}
              target="_blank"
              rel="noopener noreferrer"
              className="home-button home-button--outline"
            >
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Itinerary
