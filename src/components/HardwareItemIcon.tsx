import type { HardwareIconKey } from '@/data/hardwareCatalog'

type Props = {
  iconKey: HardwareIconKey
  className?: string
}

const svgProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

export function HardwareItemIcon({ iconKey, className }: Props) {
  switch (iconKey) {
    case 'control-signals':
      return (
        <svg {...svgProps} className={className} aria-hidden>
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path d="M7 8h10M7 11h6M7 14h8" />
          <circle cx="17" cy="14" r="1.2" fill="currentColor" stroke="none" />
          <path d="M16 8v2M18 8v2" />
        </svg>
      )
    case 'weigh-station':
      return (
        <svg {...svgProps} className={className} aria-hidden>
          <path d="M9 21V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v15" />
          <rect x="8" y="7" width="8" height="5" rx="0.8" />
          <path d="M10 14h4M10 17h4" />
          <path d="M7 21h10" />
          <path d="M14 9.5h2.5v2H14z" />
          <path d="M15 19H9v-1.5h6z" />
        </svg>
      )
    case 'weigh-station-screen':
      return (
        <svg {...svgProps} className={className} aria-hidden>
          <rect x="5" y="5" width="14" height="10" rx="1.5" />
          <path d="M9 19h6M12 15v4" />
          <path d="M8 9h8M8 12h5" />
        </svg>
      )
    case 'reader-qr-rfid':
      return (
        <svg {...svgProps} className={className} aria-hidden>
          <path d="M5 10l3-2.5h5L16 10v7l-3 2.5H8L5 17z" />
          <path d="M8 11.5h2.5v2.5H8zM12 11.5h2v1M12 13.5h2" />
          <path d="M17 9h2M18 8v4" />
          <path d="M19 11h2M20 9.5v3" />
        </svg>
      )
    case 'printer-industrial':
      return (
        <svg {...svgProps} className={className} aria-hidden>
          <rect x="6" y="3" width="12" height="6" rx="1" />
          <path d="M5 9h14v6H5z" />
          <path d="M8 15v5h8v-5" />
          <path d="M9 18h6" />
        </svg>
      )
    case 'touchscreen-dock':
      return (
        <svg {...svgProps} className={className} aria-hidden>
          <rect x="5" y="4" width="14" height="11" rx="1.2" />
          <path d="M8 8h8M8 11h6" />
          <path d="M12 15v3M9 21h6" />
        </svg>
      )
    case 'weight-display-outdoor':
      return (
        <svg {...svgProps} className={className} aria-hidden>
          <rect x="3" y="6" width="18" height="12" rx="1.5" />
          <path d="M7 10v4M9 10v4M11 10v4M13 10v4M15 10v4M17 10v4" />
          <path d="M6 16h12" />
        </svg>
      )
    case 'camera-ocr':
      return (
        <svg {...svgProps} className={className} aria-hidden>
          <path d="M4 9h3l1.5-2h7L17 9h3v9H4z" />
          <circle cx="12" cy="13.5" r="2.5" />
          <rect x="7" y="17" width="10" height="3" rx="0.5" />
        </svg>
      )
    case 'camera-overhead':
      return (
        <svg {...svgProps} className={className} aria-hidden>
          <path d="M12 3v4M9 5l3 2 3-2" />
          <rect x="8" y="7" width="8" height="5" rx="1" />
          <path d="M10 12v1.5M14 12v1.5" />
          <path d="M5 18h14M7 18v2M17 18v2" strokeDasharray="1.5 2" />
          <rect x="6" y="15" width="12" height="5" rx="0.8" strokeDasharray="2 1.5" />
        </svg>
      )
    case 'intercom-ip':
      return (
        <svg {...svgProps} className={className} aria-hidden>
          <rect x="5" y="5" width="14" height="14" rx="2" />
          <circle cx="12" cy="11" r="3" />
          <path d="M9.5 14.5c0 1.5 1 2.5 2.5 2.5s2.5-1 2.5-2.5" />
          <circle cx="12" cy="9" r="0.8" fill="currentColor" stroke="none" />
        </svg>
      )
    case 'barrier':
      return (
        <svg {...svgProps} className={className} aria-hidden>
          <path d="M8 20V10M16 20V10" />
          <path d="M8 10h8M6 8h12" />
          <path d="M7 12h12l-1.5 5H8.5z" />
        </svg>
      )
    case 'induction-loop':
      return (
        <svg {...svgProps} className={className} aria-hidden>
          <path d="M4 18h16" />
          <rect x="5" y="8" width="14" height="8" rx="1" strokeDasharray="2 2" />
          <path d="M8 11h8M8 14h8" strokeDasharray="1.5 2" />
        </svg>
      )
    case 'traffic-light-led':
      return (
        <svg {...svgProps} className={className} aria-hidden>
          <rect x="9" y="3" width="6" height="18" rx="1.5" />
          <circle cx="12" cy="7" r="1.8" />
          <circle cx="12" cy="12" r="1.8" />
          <circle cx="12" cy="17" r="1.8" />
        </svg>
      )
    case 'poles-structures':
      return (
        <svg {...svgProps} className={className} aria-hidden>
          <path d="M12 4v16" />
          <path d="M6 8h12M8 8l-1-3M16 8l1-3" />
          <circle cx="12" cy="6" r="1.2" />
          <path d="M10 11h4v3h-4z" />
        </svg>
      )
    case 'special-panels':
      return (
        <svg {...svgProps} className={className} aria-hidden>
          <rect x="4" y="5" width="16" height="14" rx="1.5" />
          <path d="M12 9v5M9.5 11.5h5" />
          <path d="M8 17h8" />
          <path d="M6 3l1.5 2M18 3l-1.5 2" />
        </svg>
      )
    case 'analytics-dashboard':
      return (
        <svg {...svgProps} className={className} aria-hidden>
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path d="M7 16V11M11 16V8M15 16v-5M19 16V6" />
          <path d="M6 17h13" />
        </svg>
      )
    default:
      return (
        <svg {...svgProps} className={className} aria-hidden>
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <path d="M9 9h6v6H9z" />
        </svg>
      )
  }
}
