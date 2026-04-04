import { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import { getStoredConsent, loadGoogleAnalytics, setStoredConsent, type CookieConsent } from '@/lib/cookieConsent'

export function CookieBanner() {
  const [visible, setVisible] = useState(() => getStoredConsent() === null)

  const choose = useCallback((value: CookieConsent) => {
    setStoredConsent(value)
    if (value === 'all') loadGoogleAnalytics()
    setVisible(false)
  }, [])

  if (!visible) return null

  return (
    <div className="cookie-banner" role="region" aria-label="Preferencias de cookies">
      <div className="container cookie-banner-inner">
        <div className="cookie-banner-text">
          <h2 className="cookie-banner-title">Uso de cookies</h2>
          <p>
            Utilizamos cookies <strong>técnicas y necesarias</strong> para guardar su decisión sobre cookies y
            permitir la navegación básica. Con su consentimiento, también usamos <strong>Google Analytics</strong>{' '}
            (cookies de tercero) para conocer de forma agregada cómo se usa esta web. Puede aceptar todas o limitarse
            a las necesarias.
          </p>
          <ul className="cookie-banner-list">
            <li>
              <strong>Necesarias:</strong> preferencia de consentimiento (almacenamiento local), funcionamiento del
              sitio.
            </li>
            <li>
              <strong>Si acepta todas:</strong> medición de audiencia con Google Analytics (informes de visitas y
              uso).
            </li>
          </ul>
          <p className="cookie-banner-legal">
            Más información en la{' '}
            <Link to="/privacidad">política de privacidad</Link>.
          </p>
        </div>
        <div className="cookie-banner-actions">
          <button type="button" className="btn btn--ghost" onClick={() => choose('necessary')}>
            Solo necesarias
          </button>
          <button type="button" className="btn btn--primary" onClick={() => choose('all')}>
            Aceptar todas
          </button>
        </div>
      </div>
    </div>
  )
}
