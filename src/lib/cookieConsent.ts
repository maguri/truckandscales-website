const STORAGE_KEY = 'truckandscales-cookie-consent'

/** Google Analytics 4 — solo se carga si el usuario acepta todas las cookies. */
export const GA_MEASUREMENT_ID = 'G-JDMCS0WQXN'

export type CookieConsent = 'necessary' | 'all'

export function getStoredConsent(): CookieConsent | null {
  try {
    const v = localStorage.getItem(STORAGE_KEY)
    if (v === 'necessary' || v === 'all') return v
  } catch {
    /* almacenamiento no disponible */
  }
  return null
}

export function setStoredConsent(value: CookieConsent): void {
  try {
    localStorage.setItem(STORAGE_KEY, value)
  } catch {
    /* ignorar */
  }
}

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

export function loadGoogleAnalytics(): void {
  if (typeof document === 'undefined') return
  if (document.getElementById('ga-gtag-js')) return

  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer!.push(args)
  }
  window.gtag('js', new Date())
  window.gtag('config', GA_MEASUREMENT_ID)

  const script = document.createElement('script')
  script.id = 'ga-gtag-js'
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
  document.head.appendChild(script)
}
