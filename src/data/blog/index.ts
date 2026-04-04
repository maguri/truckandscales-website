import type { BlogPost } from '@/data/blog/types'
import { portsurCastellonMultibasculas } from '@/data/blog/posts/portsur-castellon-multibasculas'
import { schmidtIbericaOcrBasculas } from '@/data/blog/posts/schmidt-iberica-ocr-basculas'
import { basculaAutomatizadaIbizaCantera } from '@/data/blog/posts/bascula-automatizada-ibiza-cantera'
import { albaranDigitalNormativa2026 } from '@/data/blog/posts/albaran-digital-normativa-2026'
import { huellaCarbonoTrazabilidadExpedicion } from '@/data/blog/posts/huella-carbono-trazabilidad-expedicion'
import { ocrContenedoresBanerasAgroalimentario } from '@/data/blog/posts/ocr-contenedores-baneras-agroalimentario'

export type { BlogPost } from '@/data/blog/types'

export const blogPosts: BlogPost[] = [
  portsurCastellonMultibasculas,
  schmidtIbericaOcrBasculas,
  basculaAutomatizadaIbizaCantera,
  albaranDigitalNormativa2026,
  huellaCarbonoTrazabilidadExpedicion,
  ocrContenedoresBanerasAgroalimentario,
]

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug)
}
