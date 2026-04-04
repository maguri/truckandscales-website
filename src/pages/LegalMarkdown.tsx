import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { SEO } from '@/components/SEO'

type Props = {
  title: string
  description: string
  path: string
  raw: string
}

function stripFrontmatter(md: string) {
  return md.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, '').trim()
}

export function LegalMarkdown({ title, description, path, raw }: Props) {
  const body = stripFrontmatter(raw)

  return (
    <>
      <SEO title={title} description={description} path={path} />
      <section className="section legal-page">
        <div className="container narrow markdown-body">
          <h1>{title}</h1>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{body}</ReactMarkdown>
        </div>
      </section>
    </>
  )
}
