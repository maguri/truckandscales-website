import avisoLegalMd from '@/content/legal/aviso-legal.md?raw'
import { LegalMarkdown } from '@/pages/LegalMarkdown'

export function AvisoLegalPage() {
  return (
    <LegalMarkdown
      title="Aviso legal"
      description="Aviso legal y condiciones de uso del sitio truckandscales.com conforme a la LSSI, DIGITAL APPLICATION SOLUTIONS S.L."
      path="/aviso-legal"
      raw={avisoLegalMd}
    />
  )
}
