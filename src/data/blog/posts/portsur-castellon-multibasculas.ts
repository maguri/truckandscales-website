import type { BlogPost } from '@/data/blog/types'

export const portsurCastellonMultibasculas: BlogPost = {
  slug: 'portsur-castellon-multibasculas',
  title: 'PortSur Castellón: multibásculas automáticas a escala industrial',
  date: '2026-03-12',
  excerpt:
    'Cómo Truck & Scales soporta más de 2.000 transacciones diarias en un entorno portuario con varias básculas y tráfico continuo de camiones.',
  content: `
![Camión en báscula industrial en instalación portuaria](/images/photos/home-weighbridge.png)

PortSur Castellón concentra un volumen de tráfico que supera con holgura las **2.000 transacciones de pesaje al día** entre entradas, salidas y movimientos internos. En ese contexto, una báscula “aislada” con hoja de cálculo ya no escala: hacía falta un sistema que hablara el mismo idioma en todas las islas de pesaje.

### El reto operativo

Varias básculas en paralelo, vehículos que repiten rutas a lo largo del día y la necesidad de que la documentación acompañe al camión sin demoras. El riesgo no es solo colas: es la pérdida de trazabilidad cuando un ticket no coincide con la mercancía real o con la autorización del buque y del transitario.

### Qué aportó Truck & Scales

Centralizamos el registro de pesajes y su contexto (empresa transportista, referencia de expedición, muelle o servicio portuario implicado) en una única capa lógica. Cada báscula quedó automatizada con señales de campo coherentes: el conductor sabe cuándo puede avanzar, cuándo debe detenerse y cuándo el peso ya está validado.

La arquitectura distribuida de Truck & Scales permitió que **cada isla siguiera funcionando aunque hubiera incidencias puntuales de red**: el dato crítico no queda retenido en un solo PC frágil.

### Resultado

Menos tiempo de ciclo por camión, menos reclamaciones por discrepancias de peso y un registro auditable para calidad y administración. PortSur dispone de una fotografía única de lo que entró y salió, con capacidad de crecer si mañana se añade otra báscula o un nuevo flujo de contenedores.
  `.trim(),
}
