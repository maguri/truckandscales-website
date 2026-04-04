import type { BlogPost } from '@/data/blog/types'

export const ocrContenedoresBanerasAgroalimentario: BlogPost = {
  slug: 'ocr-contenedores-baneras-agroalimentario',
  title: 'OCR marítimo y bañeras: inspección y cumplimiento en transporte agroalimentario',
  date: '2025-11-22',
  excerpt:
    'Sistemas de visión para contenedores y bañeras que refuerzan la inspección sanitaria y la trazabilidad en cadena alimentaria.',
  content: `
![Cámaras en báscula: matrícula, peso y referencia en pantalla](/images/photos/monitoring-camera-panels.png)

En transporte **agroalimentario**, la inspección no admite medias tintas: lo que entra en la bañera o en el contenedor refrigerado debe coincidir con lo declarado y con el estado físico observable. Los sistemas **OCR y de visión** permiten capturar matrícula, precintos y, con cámaras cenital/lateral, patrones de carga que sirven como evidencia.

### Contenedores marítimos

El OCR en acceso portuario reduce el friccionamiento entre terminal y camión. Cuando se combina con Truck & Scales, cada lectura queda asociada al peso y a la expedición, de modo que un inspector puede reconstruir la cadena hora a hora.

### Bañeras y productos a granel

Las **bañeras** presentan retos de visibilidad: la cámara cenital, correctamente iluminada y protegida, aporta una instantánea del estado de la carga (lonas, tapas, posibles vertidos). No sustituye al inspector humano, pero **estandariza** lo que antes dependía de una fotografía informal en el móvil del conductor.

### Normativa de inspección

Las autoridades y los esquemas de certificación privada exigen cada vez más **pruebas repetibles**. Truck & Scales actúa como repositorio de eventos: quién entró, cuándo pesó, qué imagen se tomó y qué documento selló la salida.

### Implementación

Dastions selecciona hardware homologado (AXIS, Dahua u otros según proyecto), calibra la escena y entrena el flujo para que la tasa de lectura sea aceptable incluso con suciedad o lluvia. El objetivo es **menos paradas improductivas** y más confianza entre productor, transportista y receptor.
  `.trim(),
}
