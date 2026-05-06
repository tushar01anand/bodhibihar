import { useState } from 'react'
import PageMeta from '../components/PageMeta'
import { CONTACT_EMAIL, WHATSAPP_NUMBER, createWhatsAppLink } from '../lib/contact'

const tripTypes = ['Buddhist circuit', 'Monastery stay', 'Private custom trip', 'Group pilgrimage']

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    country: '',
    dates: '',
    travelers: '',
    budget: '',
    tripType: tripTypes[0],
    notes: '',
  })

  const handleChange = ({ target }) => {
    setForm((current) => ({
      ...current,
      [target.name]: target.value,
    }))
  }

  const inquiryMessage = [
    'Hello BodhiBihar, I would like to plan a journey.',
    `Name: ${form.name || 'Not provided'}`,
    `Country: ${form.country || 'Not provided'}`,
    `Trip type: ${form.tripType}`,
    `Dates: ${form.dates || 'Not provided'}`,
    `Travelers: ${form.travelers || 'Not provided'}`,
    `Budget: ${form.budget || 'Not provided'}`,
    `Notes: ${form.notes || 'Not provided'}`,
  ].join('\n')

  return (
    <div className="page contact-page">
      <PageMeta
        title="Contact BodhiBihar | Plan Your Bihar Buddhist Circuit"
        description="Share your dates, group size, and travel goals to start planning a Buddhist circuit journey across Bihar with BodhiBihar."
      />

      <section className="page-hero">
        <div className="page-shell page-hero__grid">
          <div>
            <p className="page-kicker">Plan With Clarity</p>
            <h1>
              Tell us about
              <span> the journey you want</span>
            </h1>
          </div>
          <div className="page-hero__aside">
            <p>
              Share your dates, group size, and travel rhythm. We will shape the
              route around pilgrimage intent, comfort level, and time on the ground.
            </p>
            <div className="page-hero__mini-stats">
              <div>
                <strong>24h</strong>
                <span>Reply target</span>
              </div>
              <div>
                <strong>0</strong>
                <span>Upfront planning fee</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-shell contact-layout">
        <div className="contact-form-card">
          <p className="page-kicker">Trip Brief</p>
          <h2>Start with the essentials.</h2>

          <form className="contact-form">
            <label>
              Name
              <input name="name" value={form.name} onChange={handleChange} placeholder="Your full name" />
            </label>

            <label>
              Country
              <input
                name="country"
                value={form.country}
                onChange={handleChange}
                placeholder="Where are you travelling from?"
              />
            </label>

            <label>
              Preferred dates
              <input
                name="dates"
                value={form.dates}
                onChange={handleChange}
                placeholder="Month or exact dates"
              />
            </label>

            <label>
              Number of travelers
              <input
                name="travelers"
                value={form.travelers}
                onChange={handleChange}
                placeholder="Solo, couple, family, group"
              />
            </label>

            <label>
              Trip type
              <select name="tripType" value={form.tripType} onChange={handleChange}>
                {tripTypes.map((tripType) => (
                  <option key={tripType} value={tripType}>
                    {tripType}
                  </option>
                ))}
              </select>
            </label>

            <label>
              Budget range
              <input
                name="budget"
                value={form.budget}
                onChange={handleChange}
                placeholder="Per person or total budget"
              />
            </label>

            <label className="contact-form__full">
              Notes
              <textarea
                name="notes"
                value={form.notes}
                onChange={handleChange}
                rows="5"
                placeholder="Meditation focus, hotel preference, language needs, arrival city, or anything else that matters."
              />
            </label>
          </form>

          <div className="contact-form__actions">
            <a href={createWhatsAppLink(inquiryMessage)} target="_blank" rel="noopener noreferrer" className="home-button home-button--primary">
              Send on WhatsApp
            </a>
            <a href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('BodhiBihar trip inquiry')}&body=${encodeURIComponent(inquiryMessage)}`} className="home-button home-button--outline">
              Send by Email
            </a>
          </div>
        </div>

        <aside className="contact-sidebar">
          <div className="contact-sidebar__card">
            <p className="page-kicker page-kicker--light">How Planning Works</p>
            <h3>Designed for custom journeys, not mass-package tourism.</h3>
            <div className="contact-sidebar__steps">
              <div>
                <span>01</span>
                <p>You share your dates, group size, and travel style.</p>
              </div>
              <div>
                <span>02</span>
                <p>We respond with route suggestions, stay options, and pacing advice.</p>
              </div>
              <div>
                <span>03</span>
                <p>Final pricing depends on season, vehicle, guide needs, and room availability.</p>
              </div>
            </div>
          </div>

          <div className="contact-sidebar__plain">
            <p className="page-kicker">Direct Contact</p>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer">
              WhatsApp: +91 77820 19833
            </a>
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            <p>
              Current listed prices are indicative starting points and may change
              based on season, availability, and custom inclusions.
            </p>
          </div>
        </aside>
      </section>
    </div>
  )
}

export default Contact
