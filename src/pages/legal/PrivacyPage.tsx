import privacyMd from '@/content/legal/privacity.md?raw'
import { LegalMarkdown } from '@/pages/LegalMarkdown'

export function PrivacyPage() {
  return (
    <LegalMarkdown
      title="Política de privacidad"
      description="Política de privacidad conforme al RGPD y LOPDGDD: responsable del tratamiento, finalidades, legitimación, conservación, derechos y contacto (DIGITAL APPLICATION SOLUTIONS SL)."
      path="/privacidad"
      raw={privacyMd}
    />
  )
}
