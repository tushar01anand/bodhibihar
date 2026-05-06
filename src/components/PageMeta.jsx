import { useEffect } from 'react'

const DEFAULT_TITLE = 'BodhiBihar | Buddhist Circuit Journeys Across Bihar'
const DEFAULT_DESCRIPTION =
  'Plan mindful Buddhist circuit journeys through Bodh Gaya, Nalanda, Rajgir, and Vaishali with curated stays, pilgrimage guidance, and local coordination.'

const PageMeta = ({ title = DEFAULT_TITLE, description = DEFAULT_DESCRIPTION }) => {
  useEffect(() => {
    document.title = title

    const ensureMeta = (name, content, attribute = 'name') => {
      let tag = document.head.querySelector(`meta[${attribute}="${name}"]`)

      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute(attribute, name)
        document.head.appendChild(tag)
      }

      tag.setAttribute('content', content)
    }

    ensureMeta('description', description)
    ensureMeta('og:title', title, 'property')
    ensureMeta('og:description', description, 'property')
    ensureMeta('twitter:title', title, 'name')
    ensureMeta('twitter:description', description, 'name')
  }, [description, title])

  return null
}

export default PageMeta
