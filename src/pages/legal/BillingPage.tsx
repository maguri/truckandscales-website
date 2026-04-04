import billingMd from '@/content/legal/billing.md?raw'
import { LegalMarkdown } from '@/pages/LegalMarkdown'

export function BillingPage() {
  return (
    <LegalMarkdown
      title="Contrato y facturación"
      description="Condiciones de contrato de licencia, facturación y tarifas asociadas a servicios Dastions / Truck & Scales."
      path="/facturacion"
      raw={billingMd}
    />
  )
}
