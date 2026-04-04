import { Route, Routes } from 'react-router-dom'
import { Layout } from '@/components/Layout'
import { Home } from '@/pages/Home'
import { Pricing } from '@/pages/Pricing'
import { Hardware } from '@/pages/Hardware'
import { Contact } from '@/pages/Contact'
import { Blog } from '@/pages/Blog'
import { BlogPost } from '@/pages/BlogPost'
import { TermsPage } from '@/pages/legal/TermsPage'
import { ConsentDataPage } from '@/pages/legal/ConsentDataPage'
import { PrivacyPage } from '@/pages/legal/PrivacyPage'
import { BillingPage } from '@/pages/legal/BillingPage'
import { AvisoLegalPage } from '@/pages/legal/AvisoLegalPage'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="tarifas" element={<Pricing />} />
        <Route path="hardware" element={<Hardware />} />
        <Route path="contacto" element={<Contact />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:slug" element={<BlogPost />} />
        <Route path="terminos" element={<TermsPage />} />
        <Route path="terms" element={<TermsPage />} />
        <Route path="consentimiento-datos" element={<ConsentDataPage />} />
        <Route path="privacidad" element={<PrivacyPage />} />
        <Route path="privacity" element={<PrivacyPage />} />
        <Route path="facturacion" element={<BillingPage />} />
        <Route path="billing" element={<BillingPage />} />
        <Route path="aviso-legal" element={<AvisoLegalPage />} />
      </Route>
    </Routes>
  )
}
