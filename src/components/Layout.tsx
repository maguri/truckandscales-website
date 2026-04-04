import { Link, Outlet, useLocation } from 'react-router-dom'
import { CookieBanner } from './CookieBanner'

const nav = [
  { to: '/', label: 'Inicio' },
  { to: '/tarifas', label: 'Tarifas software' },
  { to: '/hardware', label: 'Hardware' },
  { to: '/blog', label: 'Casos y blog' },
  { to: '/contacto', label: 'Contacto' },
]

export function Layout() {
  const { pathname } = useLocation()

  return (
    <div className="layout">
      <header className="header">
        <div className="container header-inner">
          <Link to="/" className="logo">
            <img
              src="/images/logos/truck-and-scales-logo.png"
              alt="Truck &amp; Scales — Digital Documents on Cloud"
              width={280}
              height={72}
              className="logo-img"
            />
          </Link>
          <nav className="nav" aria-label="Principal">
            {nav.map(({ to, label }) => (
              <Link key={to} to={to} className={pathname === to ? 'nav-link active' : 'nav-link'}>
                {label}
              </Link>
            ))}
            <a className="btn btn--ghost" href="https://app.truckandscales.com" target="_blank" rel="noreferrer">
              App
            </a>
            <Link className="btn btn--primary" to="/contacto">
              Solicitar presupuesto
            </Link>
          </nav>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <strong>Truck &amp; Scales</strong>
            <p className="footer-tagline">Digitalizando el futuro de la logística y el transporte.</p>
          </div>
          <div>
            <h4 className="footer-heading">Legal</h4>
            <ul className="footer-links">
              <li>
                <Link to="/facturacion">Contrato y facturación</Link>
              </li>
              <li>
                <Link to="/privacidad">Política de privacidad</Link>
              </li>
              <li>
                <Link to="/terminos">Condiciones de servicio</Link>
              </li>
              <li>
                <Link to="/consentimiento-datos">Consentimiento datos personales</Link>
              </li>
              <li>
                <Link to="/aviso-legal">Aviso legal</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="footer-heading">Dastions</h4>
            <ul className="footer-links">
              <li>
                <a href="https://www.dastions.com" target="_blank" rel="noreferrer">
                  dastions.com
                </a>
              </li>
              <li>
                <a href="https://github.com/dastions" target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">© {new Date().getFullYear()} Digital Application Solutions S.L.</div>
        </div>
      </footer>

      <CookieBanner />
    </div>
  )
}
