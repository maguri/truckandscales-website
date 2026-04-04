import { Link } from 'react-router-dom'
import { JsonLdOrganization, SEO } from '@/components/SEO'

const YOUTUBE_ID = 'KLKXPXEdsbk'

const features = [
  {
    title: 'Seguridad',
    body: 'Sin infraestructura adicional y con acceso a Internet, la empresa emisora puede emitir documentación cifrada hacia un sistema descentralizado y trazable.',
  },
  {
    title: 'Documentación digital',
    body: 'Las empresas propietarias de cada documento tienen acceso en tiempo real para anticiparse a la llegada de la mercancía a destino.',
  },
  {
    title: 'Accesibilidad y sincronización',
    body: 'Clientes y transportistas comparten la misma información y permanecen alineados en el control del transporte y las expediciones.',
  },
]

const pillars = [
  {
    title: 'Plataforma conectada',
    text: 'Truck & Scales une báscula, accesos y documentación en un único flujo operativo, en cloud o en instalación local según su política IT.',
  },
  {
    title: 'Automatización de báscula',
    text: 'Integración con señales de campo, barreras, lectura de matrículas (OCR), impresión de tickets y validación de usuarios.',
  },
  {
    title: 'Integración empresarial',
    text: 'Conexión con su ERP y sistemas existentes mediante APIs, ficheros o bases de datos, con el acompañamiento de Dastions.',
  },
]

/** Logos referenciados en la web publicada; si falta el fichero en /public, el alt sigue siendo útil. */
const clientLogos = [
  { src: '/images/logos/clients/portsur.png', alt: 'PortSur Castellón' },
  { src: '/images/logos/clients/systek.svg', alt: 'Systek' },
  { src: '/images/logos/clients/schmidt.png', alt: 'Schmidt Ibérica' },
  { src: '/images/logos/clients/tribe.svg', alt: 'Tribe' },
  { src: '/images/logos/clients/porttarragona.png', alt: 'Port Tarragona' },
]

export function Home() {
  return (
    <>
      <SEO
        title="Truck & Scales — Software para básculas y logística"
        description="Plataforma para digitalizar pesajes, documentación de transporte y control de accesos. Cloud, local y automatización con Dastions."
        path="/"
      />
      <JsonLdOrganization />

      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">Software &amp; automatización · Dastions</p>
            <h1 className="hero-title">Truck &amp; Scales</h1>
            <p className="hero-lead">Digitalizando el futuro de la logística y el transporte.</p>
            <p className="hero-copy">
              {'Truck & Scales'} es la solución para empresas que necesitan pesar camiones con trazabilidad, documentación digital coherente y
              control de accesos sin fricción. Desde el muelle hasta la oficina, todos ven el mismo dato en el momento adecuado.
            </p>
            <div className="hero-actions">
              <Link to="/contacto" className="btn btn--primary">
                Hablar con ventas
              </Link>
              <Link to="/tarifas" className="btn btn--secondary">
                Ver tarifas software
              </Link>
              <a className="btn btn--ghost" href="https://app.truckandscales.com" target="_blank" rel="noreferrer">
                Acceder a la app
              </a>
            </div>
          </div>
          <div className="hero-aside">
            <figure className="hero-photo">
              <img
                src="/images/photos/home-weighbridge.png"
                alt="Camión en báscula industrial: pesaje y logística con Truck & Scales"
                width={1200}
                height={800}
                decoding="async"
              />
            </figure>
            <div className="hero-card">
              <h3 className="hero-card-title">Qué resuelve</h3>
              <ul className="hero-list">
                <li>Pesaje y registro de entradas y salidas con auditoría.</li>
                <li>Expedición de albaranes y tickets alineados con su operativa.</li>
                <li>OCR y señales de campo para reducir errores manuales.</li>
                <li>Visibilidad para planta, calidad y administración en paralelo.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--muted">
        <div className="container">
          <div className="section-head">
            <h2>Vídeo de presentación</h2>
            <p className="section-sub">Resumen visual del enfoque Truck & Scales para báscula y logística.</p>
          </div>
          <div className="video-shell">
            <iframe
              title="Truck & Scales — vídeo"
              src={`https://www.youtube.com/embed/${YOUTUBE_ID}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Por qué Truck & Scales</h2>
            <p className="section-sub">Tres pilares que mantenemos alineados con la web comercial publicada en truckandscales.com.</p>
          </div>
          <div className="cards-3">
            {features.map((f) => (
              <article key={f.title} className="card">
                <h3>{f.title}</h3>
                <p>{f.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--accent-soft">
        <div className="container">
          <div className="section-head">
            <h2>Cómo lo desplegamos</h2>
            <p className="section-sub">Una arquitectura modular: empiece por cloud o local y añada automatización cuando la báscula lo exija.</p>
          </div>
          <div className="cards-3">
            {pillars.map((p) => (
              <article key={p.title} className="card card--border">
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </article>
            ))}
          </div>
          <div className="center-cta">
            <Link to="/hardware" className="btn btn--secondary">
              Ver catálogo de hardware
            </Link>
            <Link to="/blog" className="btn btn--ghost">
              Leer casos de éxito
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--clients">
        <div className="container">
          <div className="section-head">
            <h2>Nuestros clientes</h2>
            <p className="section-sub">Organizaciones que confían en Truck & Scales y en el ecosistema Dastions para sus operaciones críticas.</p>
          </div>
          <ul className="client-strip" aria-label="Logotipos de clientes">
            {clientLogos.map((c) => (
              <li key={c.alt}>
                <img src={c.src} alt={c.alt} className="client-logo" loading="lazy" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section cta-band">
        <div className="container cta-band-inner">
          <div>
            <h2>¿Listo para modernizar su báscula?</h2>
            <p>Equipo comercial en tienda@dastions.com — le asesoramos en software, hardware y proyecto llave en mano.</p>
          </div>
          <Link to="/contacto" className="btn btn--light">
            Ir al formulario de contacto
          </Link>
        </div>
      </section>
    </>
  )
}
