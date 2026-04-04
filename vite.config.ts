import { copyFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

const root = fileURLToPath(new URL('.', import.meta.url))

/** GitHub Pages no sirve fallback SPA; duplicar index como 404 evita 404 al refrescar rutas. */
function spaFallback404(): Plugin {
  return {
    name: 'spa-fallback-404',
    closeBundle() {
      const dist = path.resolve(root, 'dist')
      copyFileSync(path.join(dist, 'index.html'), path.join(dist, '404.html'))
    },
  }
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  base: process.env.VITE_BASE_PATH || '/',
  plugins: [react(), ...(mode === 'production' ? [spaFallback404()] : [])],
  resolve: {
    alias: {
      '@': path.resolve(root, 'src'),
    },
  },
}))
