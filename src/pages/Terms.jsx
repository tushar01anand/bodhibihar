import PageMeta from '../components/PageMeta'
import { CONTACT_EMAIL } from '../lib/contact'

const Terms = () => {
  return (
    <div className="page legal-page">
      <PageMeta
        title="Terms of Service | BodhiBihar"
        description="Read the basic planning, pricing, and availability terms for BodhiBihar journeys."
      />

      <section className="page-hero">
        <div className="page-shell">
          <p className="page-kicker">Terms of Service</p>
          <h1>
            Early-stage travel planning
            <span> with clear expectations</span>
          </h1>
        </div>
      </section>

      <section className="page-shell legal-card">
        <p>
          BodhiBihar provides itinerary planning, stay recommendations, and travel
          coordination for Buddhist circuit journeys in Bihar.
        </p>
        <p>
          Prices shown on this site are indicative starting prices, not guaranteed
          final quotes. Final pricing depends on season, availability, group size,
          room category, transport choices, and any custom inclusions.
        </p>
        <p>
          A trip is not confirmed until details are mutually agreed and any required
          payment terms are shared directly with the traveler.
        </p>
        <p>
          Travelers remain responsible for visas, identification, travel insurance,
          medical readiness, and respecting monastery or heritage-site conduct rules.
        </p>
        <p>
          For questions about pricing, revisions, or cancellations, contact{' '}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>
      </section>
    </div>
  )
}

export default Terms
