/**
 * Contenido en Markdown (GFM). Para insertar imágenes entre párrafos:
 *
 * ![Texto alternativo](https://ejemplo.com/imagen.jpg)
 *
 * Opcionalmente, enlace a la imagen:
 * [![alt](https://...thumb.jpg)](https://...full.jpg)
 */
export type BlogPost = {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
}
