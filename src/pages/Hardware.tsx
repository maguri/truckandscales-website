import { Link } from 'react-router-dom'
import { hardwareGroups } from '@/data/hardwareCatalog'
import { HardwareItemIcon } from '@/components/HardwareItemIcon'
import { SEO } from '@/components/SEO'

export function Hardware() {
  return (
    <>
      <SEO
        title="Hardware para báscula y automatización"
        description="Armarios de báscula, terminales WeighStation, OCR, señalización y periféricos compatibles con Truck & Scales. Sin precios en web."
        path="/hardware"
      />
      <section className="page-hero">
        <div className="container narrow">
          <h1>Hardware compatible</h1>
          <p className="lead">
            Catálogo resumido a partir del listado técnico-comercial Dastions para Truck & Scales y módulos de automatización. Aquí no publicamos
            precios de hardware: cada proyecto depende de layout, normativa y integraciones.
          </p>
          <figure className="page-lead-figure">
            <img
              src="/images/photos/hardware-api-integration.png"
              alt="Terminal de báscula conectada por API a servidor, báscula, impresora y red"
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
          {hardwareGroups.map((group) => (
            <div key={group.title} className="hw-block">
              <h2>{group.title}</h2>
              {group.intro ? <p className="hw-intro">{group.intro}</p> : null}
              <ul className="hw-list">
                {group.items.map((item) => (
                  <li key={item.name}>
                    <div className="hw-item-icon" aria-hidden>
                      <HardwareItemIcon iconKey={item.iconKey} className="hw-item-icon-svg" />
                    </div>
                    <div className="hw-item-body">
                      <strong>{item.name}</strong>
                      <span>{item.description}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="hardware-cta">
            <h2>Solicitar presupuesto de hardware</h2>
            <p>
              Cuéntenos básculas, flujo de tráfico, integración con ERP y si necesita OCR o señales de campo. Prepararemos una propuesta
              alineada con Truck & Scales.
            </p>
            <Link to="/contacto" className="btn btn--primary btn--large">
              Ir al formulario de contacto
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
