import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import App from '@/App.tsx'
import { getStoredConsent, loadGoogleAnalytics } from '@/lib/cookieConsent.ts'

if (getStoredConsent() === 'all') {
  loadGoogleAnalytics()
}

const routerBasenameRaw = import.meta.env.BASE_URL.replace(/\/$/, '')
const routerBasename = routerBasenameRaw === '' ? undefined : routerBasenameRaw

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter basename={routerBasename}>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
)
