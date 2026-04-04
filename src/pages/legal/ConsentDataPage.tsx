import consentMd from '@/content/legal/consentimiento-datos.md?raw'
import { LegalMarkdown } from '@/pages/LegalMarkdown'

export function ConsentDataPage() {
  return (
    <LegalMarkdown
      title="Consentimiento para el tratamiento de datos personales"
      description="Información sobre el tratamiento de datos personales y bases legales (DIGITAL APPLICATION SOLUTIONS SL)."
      path="/consentimiento-datos"
      raw={consentMd}
    />
  )
}
