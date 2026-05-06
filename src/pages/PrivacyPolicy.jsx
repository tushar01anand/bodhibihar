import PageMeta from '../components/PageMeta'
import { CONTACT_EMAIL } from '../lib/contact'

const PrivacyPolicy = () => {
  return (
    <div className="page legal-page">
      <PageMeta
        title="Privacy Policy | BodhiBihar"
        description="Read how BodhiBihar handles inquiry details, contact data, and communication preferences."
      />

      <section className="page-hero">
        <div className="page-shell">
          <p className="page-kicker">Privacy Policy</p>
          <h1>
            We collect only
            <span> what helps plan your journey</span>
          </h1>
        </div>
      </section>

      <section className="page-shell legal-card">
        <p>
          BodhiBihar collects the information you share through WhatsApp, email,
          or inquiry forms so we can respond to trip requests, suggest itineraries,
          and coordinate stays, transport, and guides.
        </p>
        <p>
          This may include your name, contact details, travel dates, nationality,
          group size, budget, and any special requirements you choose to share.
        </p>
        <p>
          We do not sell your personal information. We may share relevant trip
          details with accommodation providers, drivers, or local partners only
          when needed to prepare or confirm your journey.
        </p>
        <p>
          If you want your inquiry data updated or removed, email us at{' '}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>
      </section>
    </div>
  )
}

export default PrivacyPolicy
