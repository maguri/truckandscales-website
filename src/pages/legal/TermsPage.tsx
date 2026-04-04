import termsMd from '@/content/legal/terms.md?raw'
import { LegalMarkdown } from '@/pages/LegalMarkdown'

export function TermsPage() {
  return (
    <LegalMarkdown
      title="Condiciones de servicio"
      description="Términos y condiciones de la aplicación móvil Truck & Scales (DIGITAL APPLICATION SOLUTIONS SL)."
      path="/terminos"
      raw={termsMd}
    />
  )
}
