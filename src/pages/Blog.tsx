import { Link } from 'react-router-dom'
import { blogPosts } from '@/data/blog'
import { SEO } from '@/components/SEO'

export function Blog() {
  const sorted = [...blogPosts].sort((a, b) => (a.date < b.date ? 1 : -1))

  return (
    <>
      <SEO
        title="Casos de éxito y blog"
        description="Artículos y casos prácticos de Truck & Scales: puertos, industria química, canteras, normativa documental y OCR agroalimentario."
        path="/blog"
      />
      <section className="page-hero">
        <div className="container narrow">
          <h1>Casos de éxito y blog</h1>
          <p className="lead">
            Historias reales y artículos técnicos sobre básculas conectadas, OCR, normativa y sostenibilidad. Contenido elaborado por el equipo
            Dastions para ayudar a tomar decisiones.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ul className="blog-list">
            {sorted.map((post) => (
              <li key={post.slug}>
                <article className="blog-card">
                  <time dateTime={post.date} className="blog-date">
                    {new Date(post.date).toLocaleDateString('es-ES', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                  <h2>
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p>{post.excerpt}</p>
                  <Link to={`/blog/${post.slug}`} className="text-link">
                    Leer artículo →
                  </Link>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
