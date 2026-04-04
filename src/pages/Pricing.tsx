import { Link } from 'react-router-dom'
import { SEO } from '@/components/SEO'

const webPlans = [
  {
    name: 'Base',
    tag: 'Cloud esencial',
    price: 'Desde 89 €',
    period: '/ mes',
    note: 'Precio orientativo según tarifas Dastions (T&S Cloud, enero 2026). IVA no incluido.',
    bullets: [
      'Aplicación web Truck & Scales Cloud.',
      'Hasta 2 básculas conectadas.',
      'Requiere conectividad a Internet estable.',
      'Ideal para empezar con documentación digital y trazabilidad centralizada.',
    ],
  },
  {
    name: 'Personalizado',
    tag: 'ERP y proyecto',
    price: '',
    period: '',
    note: 'El punto de partida en suscripción puede alinearse con Base; integraciones SAP, Sage, Oracle, SQL, FTP, API REST y desarrollo se presupuestan según alcance.',
    bullets: [
      'Análisis de flujo y adaptación a su ERP y políticas de datos.',
      'Contratos de mantenimiento para integraciones y evolutivos.',
      'Desarrollo fuera de contrato: referencia 65 €/hora (según tarifas Dastions).',
      'Pantallas táctiles, cuadros y escenarios multiplanta coordinados con Dastions.',
    ],
  },
]

const automationModules = [
  {
    title: 'Módulo solo peso',
    license: 'Licencia de Automatización «BASIC WEIGHT»',
    descriptions: ['Captura el peso de la báscula y lo envía al programa.'],
    requirement: (
      <>
        Requiere <Link to="/hardware">armario de báscula</Link>.
      </>
    ),
    prices: [{ label: 'Pago único', amount: '920,00 €' }],
  },
  {
    title: 'Módulo de señales de campo',
    license: 'Licencia de Automatización «TRAFFIC SIGNAL CONTROL»',
    descriptions: ['Licencia de software de señales digitales de campo para barreras, semáforos y sensores.'],
    requirement: (
      <>
        Requiere <Link to="/hardware">armario de báscula</Link>.
      </>
    ),
    prices: [{ label: 'Pago único', amount: '1.020,00 €' }],
  },
  {
    title: 'Módulo de impresora y lector de tarjetas',
    license: 'Licencia de Automatización «SMART CARD READER & PRINTER»',
    descriptions: [
      'Función de imprimir ticket / albarán de báscula.',
      'Función de identificación de usuario.',
    ],
    requirement: <>Requiere impresora o lector de tarjetas (hardware según proyecto).</>,
    prices: [{ label: 'Pago único', amount: '1.080,00 €' }],
  },
  {
    title: 'OCR — Licencia de lectura de matrículas',
    license: 'Software local para cámara OCR',
    descriptions: [
      'Licencia local de software para cámara OCR, destinada a la lectura y reconocimiento automático de caracteres para procesos de identificación y control.',
      'Opción Cloud: 1 a 5 cámaras conectadas.',
    ],
    requirement: null,
    prices: [
      { label: 'Mensual por cámara (Cloud)', amount: '19,00 €' },
      { label: 'Servidor local — pago único', amount: '1.900,00 €' },
    ],
    fullWidth: true,
  },
]

export function Pricing() {
  return (
    <>
      <SEO
        title="Tarifas software Truck & Scales"
        description="Aplicación web desde 89 €/mes y licencias de automatización de báscula (peso, señales, impresión, OCR) e integración ERP."
        path="/tarifas"
      />
      <section className="page-hero">
        <div className="container narrow">
          <h1>Tarifas del software</h1>
          <p className="lead">
            Estructura alineada con el catálogo Dastions: suscripción a la aplicación web y, si lo necesita, licencias de pago único para automatización en
            báscula.
          </p>
          <figure className="page-lead-figure">
            <img
              src="/images/photos/pricing-dashboard.png"
              alt="Panel Truck & Scales: movimientos autorizados, toneladas y trazabilidad de pesadas"
              width={1200}
              height={675}
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="pricing-block">
            <h2 className="pricing-section-title">Aplicación web</h2>
            <div className="pricing-grid pricing-grid--two">
              {webPlans.map((p) => (
                <article key={p.name} className="price-card">
                  <p className="price-tag">{p.tag}</p>
                  <h2>{p.name}</h2>
                  <p className="price-line">
                    <span className="price-amount">{p.price}</span>
                    {p.period ? <span className="price-period">{p.period}</span> : null}
                  </p>
                  <p className="price-note">{p.note}</p>
                  <ul className="price-list">
                    {p.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                  <Link to="/contacto" className="btn btn--primary btn--block">
                    Solicitar presupuesto
                  </Link>
                </article>
              ))}
            </div>
          </div>

          <div className="pricing-block">
            <h2 className="pricing-section-title">Automatización de báscula</h2>
            <div className="automation-grid">
              {automationModules.map((m) => (
                <article key={m.license} className={m.fullWidth ? 'automation-card automation-card--full' : 'automation-card'}>
                  <h3>{m.title}</h3>
                  <p className="automation-license">{m.license}</p>
                  {m.descriptions.map((d) => (
                    <p key={d} className="automation-desc">
                      {d}
                    </p>
                  ))}
                  {m.requirement ? <p className="automation-req">{m.requirement}</p> : null}
                  <div className="automation-prices">
                    {m.prices.map((row) => (
                      <div key={row.label} className="automation-price-row">
                        <span>{row.label}</span>
                        <strong>{row.amount}</strong>
                      </div>
                    ))}
                  </div>
                  <Link to="/contacto" className="btn btn--ghost btn--block">
                    Contacta con un comercial
                  </Link>
                </article>
              ))}
            </div>
          </div>

          <p className="fine-print">
            Los importes son orientativos y pueden variar según volumen, país fiscal y módulos activos. La propuesta formal la emite Dastions tras revisar su
            caso.
          </p>
        </div>
      </section>
    </>
  )
}
