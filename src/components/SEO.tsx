import { Helmet } from 'react-helmet-async'

const SITE_URL = 'https://www.truckandscales.com'
const DEFAULT_DESC =
  'Truck & Scales digitaliza la logística y el transporte: básculas conectadas, documentación digital, OCR y trazabilidad. Software y automatización por Dastions.'

type SEOProps = {
  title: string
  description?: string
  path?: string
  noIndex?: boolean
}

export function SEO({ title, description = DEFAULT_DESC, path = '', noIndex }: SEOProps) {
  const fullTitle = title.includes('Truck') ? title : `${title} | Truck & Scales`
  const url = `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`

  return (
    <Helmet>
      <html lang="es" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {noIndex ? <meta name="robots" content="noindex,nofollow" /> : null}
      <link rel="canonical" href={url} />
      <meta property="og:site_name" content="Truck & Scales" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:locale" content="es_ES" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  )
}

export function JsonLdOrganization() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Truck & Scales',
    url: SITE_URL,
    description: DEFAULT_DESC,
    parentOrganization: {
      '@type': 'Organization',
      name: 'Digital Application Solutions S.L. (Dastions)',
      url: 'https://www.dastions.com',
    },
    sameAs: ['https://github.com/dastions'],
  }
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  )
}
