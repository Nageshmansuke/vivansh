import { useEffect } from 'react'
import { site } from '../data/site'

type SeoProps = {
  title?: string
  description?: string
  path?: string
}

export function Seo({ title, description, path = '/' }: SeoProps) {
  const fullTitle = title ? `${title} — ${site.name}` : site.seo.title
  const desc = description ?? site.seo.description
  const url = `${site.url}${path}`

  useEffect(() => {
    document.title = fullTitle
    setMeta('name', 'description', desc)
    setMeta('property', 'og:title', fullTitle)
    setMeta('property', 'og:description', desc)
    setMeta('property', 'og:url', url)
    setMeta('property', 'og:image', site.images.og)
    setMeta('name', 'twitter:title', fullTitle)
    setMeta('name', 'twitter:description', desc)
  }, [fullTitle, desc, url])

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'HealthClub',
          name: site.name,
          description: site.description,
          url: site.url,
          telephone: site.phoneDisplay,
          email: site.email,
          image: site.images.hero,
          address: {
            '@type': 'PostalAddress',
            streetAddress: `${site.address.line1}, ${site.address.line2}`,
            addressLocality: site.address.city,
            addressRegion: site.address.state,
            postalCode: site.address.postalCode,
            addressCountry: 'IN',
          },
          openingHoursSpecification: [
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
              opens: '06:00',
              closes: '22:00',
            },
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Saturday', 'Sunday'],
              opens: '07:00',
              closes: '21:00',
            },
          ],
        }),
      }}
    />
  )
}

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}
