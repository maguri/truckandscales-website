import { Link, useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { getPostBySlug } from '@/data/blog'
import { SEO } from '@/components/SEO'

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const post = slug ? getPostBySlug(slug) : undefined

  if (!post) {
    return (
      <>
        <SEO title="Artículo no encontrado" noIndex path="/blog" />
        <section className="section">
          <div className="container narrow">
            <h1>No encontrado</h1>
            <p>Este artículo no existe o ha sido movido.</p>
            <Link to="/blog" className="text-link">
              Volver al blog
            </Link>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      <SEO title={post.title} description={post.excerpt} path={`/blog/${post.slug}`} />
      <article className="blog-article">
        <div className="container narrow">
          <Link to="/blog" className="text-link blog-back">
            ← Todos los artículos
          </Link>
          <header className="blog-article-head">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('es-ES', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <h1>{post.title}</h1>
            <p className="lead">{post.excerpt}</p>
          </header>
          <div className="markdown-body">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                img: ({ src, alt }) => (
                  <span className="blog-inline-figure">
                    <img
                      src={src}
                      alt={alt ?? ''}
                      loading="lazy"
                      decoding="async"
                    />
                  </span>
                ),
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
          <footer className="blog-article-foot">
            <Link to="/contacto" className="btn btn--primary">
              Solicitar información
            </Link>
          </footer>
        </div>
      </article>
    </>
  )
}
