import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import PageMeta from '../components/PageMeta'
import { CONTACT_EMAIL, WHATSAPP_NUMBER, createWhatsAppLink } from '../lib/contact'

const tripTypes = ['Buddhist circuit', 'Monastery stay', 'Private custom trip', 'Group pilgrimage']
const budgetRanges = [
  'Under $250 per day',
  '$250-$500 per day',
  '$500-$900 per day',
  '$900+ per day',
  'Need guidance',
]

const formatTravelDate = (value) => {
  if (!value) {
    return 'Not provided'
  }

  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(`${value}T00:00:00`))
}

const buildInitialForm = (searchParams) => {
  const requestedTripType = searchParams.get('tripType')
  const presetNotes = searchParams.get('notes') ?? ''

  return {
    name: '',
    country: '',
    startDate: '',
    endDate: '',
    travelers: '1',
    budget: budgetRanges[4],
    tripType: tripTypes.includes(requestedTripType) ? requestedTripType : tripTypes[0],
    notes: presetNotes,
  }
}

const Contact = () => {
  const [searchParams] = useSearchParams()
  const [form, setForm] = useState(() => buildInitialForm(searchParams))
  const [errors, setErrors] = useState({})
  const [formStatus, setFormStatus] = useState('')

  const handleChange = ({ target }) => {
    setForm((current) => ({
      ...current,
      [target.name]: target.value,
    }))

    setErrors((current) => {
      if (!current[target.name]) {
        return current
      }

      const next = { ...current }
      delete next[target.name]
      return next
    })
    setFormStatus('')
  }

  const validateForm = () => {
    const nextErrors = {}

    if (!form.name.trim()) {
      nextErrors.name = 'Please share your name.'
    }

    if (!form.country.trim()) {
      nextErrors.country = 'Please share where you are travelling from.'
    }

    if (!form.startDate) {
      nextErrors.startDate = 'Please choose an arrival or preferred start date.'
    }

    if (!form.travelers || Number(form.travelers) < 1) {
      nextErrors.travelers = 'Please enter at least one traveler.'
    }

    if (form.endDate && form.startDate && form.endDate < form.startDate) {
      nextErrors.endDate = 'End date should be after the start date.'
    }

    return nextErrors
  }

  const formatTripWindow = () => {
    if (!form.startDate && !form.endDate) {
      return 'Not provided'
    }

    if (form.startDate && form.endDate) {
      return `${formatTravelDate(form.startDate)} to ${formatTravelDate(form.endDate)}`
    }

    return `From ${formatTravelDate(form.startDate)}`
  }

  const inquiryMessage = [
    'Hello BodhiBihar, I would like to plan a journey.',
    `Name: ${form.name || 'Not provided'}`,
    `Country: ${form.country || 'Not provided'}`,
    `Trip type: ${form.tripType}`,
    `Dates: ${formatTripWindow()}`,
    `Travelers: ${form.travelers || 'Not provided'}`,
    `Budget: ${form.budget}`,
    `Notes: ${form.notes || 'Not provided'}`,
  ].join('\n')

  const emailHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('BodhiBihar trip inquiry')}&body=${encodeURIComponent(inquiryMessage)}`

  const handleSubmit = (event) => {
    event.preventDefault()

    const nextErrors = validateForm()
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      setFormStatus('Please complete the highlighted fields before sending your inquiry.')
      return
    }

    const action = event.nativeEvent.submitter?.value

    if (action === 'email') {
      window.location.href = emailHref
      setFormStatus('Your trip brief has been prepared in your email app.')
      return
    }

    window.open(createWhatsAppLink(inquiryMessage), '_blank', 'noopener,noreferrer')
    setFormStatus('Your trip brief has been prepared in WhatsApp.')
  }

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
          <p className="contact-form__intro">
            Share a few trip details first, then send the completed brief by WhatsApp or email.
          </p>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <label>
              Name <span className="contact-form__required">*</span>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your full name"
                autoComplete="name"
                aria-invalid={Boolean(errors.name)}
              />
              {errors.name ? <span className="contact-form__error">{errors.name}</span> : null}
            </label>

            <label>
              Country <span className="contact-form__required">*</span>
              <input
                name="country"
                value={form.country}
                onChange={handleChange}
                placeholder="Where are you travelling from?"
                autoComplete="country-name"
                aria-invalid={Boolean(errors.country)}
              />
              {errors.country ? <span className="contact-form__error">{errors.country}</span> : null}
            </label>

            <label>
              Arrival or start date <span className="contact-form__required">*</span>
              <input
                type="date"
                name="startDate"
                value={form.startDate}
                onChange={handleChange}
                aria-invalid={Boolean(errors.startDate)}
              />
              {errors.startDate ? <span className="contact-form__error">{errors.startDate}</span> : null}
            </label>

            <label>
              Return or end date
              <input
                type="date"
                name="endDate"
                value={form.endDate}
                min={form.startDate || undefined}
                onChange={handleChange}
                aria-invalid={Boolean(errors.endDate)}
              />
              {errors.endDate ? <span className="contact-form__error">{errors.endDate}</span> : null}
            </label>

            <label>
              Number of travelers <span className="contact-form__required">*</span>
              <input
                type="number"
                name="travelers"
                value={form.travelers}
                onChange={handleChange}
                min="1"
                inputMode="numeric"
                aria-invalid={Boolean(errors.travelers)}
              />
              {errors.travelers ? <span className="contact-form__error">{errors.travelers}</span> : null}
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
              <select
                name="budget"
                value={form.budget}
                onChange={handleChange}
              >
                {budgetRanges.map((budgetRange) => (
                  <option key={budgetRange} value={budgetRange}>
                    {budgetRange}
                  </option>
                ))}
              </select>
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

            <div className="contact-form__actions contact-form__full">
              <button type="submit" value="whatsapp" className="home-button home-button--primary">
                Send on WhatsApp
              </button>
              <button type="submit" value="email" className="home-button home-button--outline">
                Send by Email
              </button>
            </div>

            <p className="contact-form__submit-note contact-form__full">
              We add your trip details automatically so the planning conversation can start with context.
            </p>

            {formStatus ? (
              <p className="contact-form__status contact-form__full" role="status">
                {formStatus}
              </p>
            ) : null}
          </form>

          <div className="contact-form__fallbacks">
            <a href={createWhatsAppLink('Hello BodhiBihar, I would like to plan a journey.')} target="_blank" rel="noopener noreferrer" className="home-button home-button--ghost">
              Send on WhatsApp
            </a>
            <a href={`mailto:${CONTACT_EMAIL}`} className="home-button home-button--outline">
              Email Directly
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
            <p className="page-kicker">Typical Planning Range</p>
            <div className="contact-sidebar__ranges">
              <div>
                <strong>Simple pilgrim stay</strong>
                <span>Monastery stays or practical hotels, fewer transfers, essential coordination.</span>
              </div>
              <div>
                <strong>Balanced comfort circuit</strong>
                <span>Private vehicle, curated hotel mix, slower pacing, stronger on-ground support.</span>
              </div>
              <div>
                <strong>Private premium journey</strong>
                <span>Higher stay category, custom routing, additional guide or language support when needed.</span>
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

      <section className="page-shell contact-proof">
        <div className="contact-proof__grid">
          <div>
            <strong>Reply with a human plan</strong>
            <span>You hear back with route suggestions, pacing advice, and next-step questions instead of an automated package dump.</span>
          </div>
          <div>
            <strong>Flexible around purpose</strong>
            <span>We can tune the same circuit toward pilgrimage, reflection, cultural travel, or a lighter monastery-focused stay.</span>
          </div>
          <div>
            <strong>Quotes shaped around reality</strong>
            <span>Final pricing adjusts to season, room inventory, vehicle type, and how slowly or intensively you want to travel.</span>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
