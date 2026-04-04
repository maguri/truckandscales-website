import { type FormEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import { SEO } from '@/components/SEO'

const MAIL = 'tienda@dastions.com'

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [phone, setPhone] = useState('')
  const [topic, setTopic] = useState('software')
  const [message, setMessage] = useState('')
  const [termsAccepted, setTermsAccepted] = useState(false)

  function submit(e: FormEvent) {
    e.preventDefault()
    if (!termsAccepted) return
    const subject = encodeURIComponent(`[Truck & Scales web] ${topic} — ${company || name}`)
    const body = encodeURIComponent(
      `Nombre: ${name}\nEmail: ${email}\nEmpresa: ${company}\nTeléfono: ${phone}\nInterés: ${topic}\n\n${message}\n\nAceptación consentimiento tratamiento datos personales: sí\n`,
    )
    window.location.href = `mailto:${MAIL}?subject=${subject}&body=${body}`
  }

  return (
    <>
      <SEO
        title="Contacto y presupuesto"
        description="Solicite información o presupuesto de Truck & Scales. El formulario abre su cliente de correo hacia tienda@dastions.com."
        path="/contacto"
      />
      <section className="page-hero">
        <div className="container narrow">
          <h1>Contacto</h1>
          <p className="lead">
            Escriba a <a href={`mailto:${MAIL}`}>{MAIL}</a> o use el formulario: abrirá su aplicación de correo con el mensaje listo para enviar.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container narrow">
          <form className="contact-form" onSubmit={submit}>
            <label>
              Nombre y apellidos
              <input required value={name} onChange={(e) => setName(e.target.value)} name="name" autoComplete="name" />
            </label>
            <label>
              Correo electrónico
              <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} name="email" autoComplete="email" />
            </label>
            <label>
              Empresa
              <input value={company} onChange={(e) => setCompany(e.target.value)} name="company" autoComplete="organization" />
            </label>
            <label>
              Teléfono
              <input value={phone} onChange={(e) => setPhone(e.target.value)} name="phone" autoComplete="tel" />
            </label>
            <label>
              ¿Qué necesita?
              <select value={topic} onChange={(e) => setTopic(e.target.value)} name="topic">
                <option value="software">Software Truck & Scales / licencias</option>
                <option value="hardware">Hardware de báscula</option>
                <option value="proyecto">Proyecto llave en mano</option>
                <option value="soporte">Soporte o incidencia</option>
              </select>
            </label>
            <label>
              Mensaje
              <textarea
                required
                rows={6}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                name="message"
                placeholder="Describa básculas, integración ERP, OCR, flujo de pesaje…"
              />
            </label>
            <label className="contact-form__checkbox">
              <input
                type="checkbox"
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
                name="consentimiento-datos"
                required
              />
              <span>
                He leído y acepto el{' '}
                <Link to="/consentimiento-datos">consentimiento para el tratamiento de datos personales</Link>.
              </span>
            </label>
            <button type="submit" className="btn btn--primary btn--large">
              Abrir correo en {MAIL}
            </button>
            <p className="fine-print">
              Al enviar, se abrirá su cliente de correo. Si no ocurre nada, copie el texto y envíelo manualmente a {MAIL}.
            </p>
          </form>
        </div>
      </section>
    </>
  )
}
