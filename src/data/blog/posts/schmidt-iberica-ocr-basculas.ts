import type { BlogPost } from '@/data/blog/types'

export const schmidtIbericaOcrBasculas: BlogPost = {
  slug: 'schmidt-iberica-ocr-basculas',
  title: 'Schmidt Ibérica: OCR en básculas y accesos para plantas químicas',
  date: '2026-02-28',
  excerpt:
    'Reconocimiento de matrícula y control de accesos centralizado en sistema local para expediciones marítimas y polímeros en Tarragona.',
  content: `
![Integración de terminal de báscula con API, servidor y periféricos](/images/photos/hardware-api-integration.png)

Schmidt Ibérica opera varias plantas en el entorno de Tarragona con **expediciones de contenedores marítimos** y líneas dedicadas a **polímeros para la industria química**. Cada planta tenía su ritual en báscula; el reto era uniformar criterios sin renunciar a un modelo **centralizado en su sistema local** por políticas de soberanía de datos.

### OCR como frontera entre calle y planta

Instalamos lectura automática de matrícula en los puntos críticos: el camión se identifica antes de que el guardia o el operador de báscula intervengan. Ese evento dispara las reglas de Truck & Scales: ¿está autorizado? ¿tiene orden de carga válida? ¿coincide el contenedor esperado con el detectado por cámara cenital cuando la operación lo requiere?

### Multiplanta, una gobernanza

Los datos sensibles permanecen en la infraestructura del cliente; Truck & Scales actúa como orquestador de señales, pesos y documentación. Los responsables de logística ven dashboards coherentes aunque cada planta mantenga matices de layout o de normativa interna.

### Valor para la química

En polímeros y productos clasificados, la trazabilidad no es un “extra”: es condición para auditorías y para demostrar cadena de custodia. El OCR redujo errores de identificación y aceleró los cruces con el ERP cuando el ferry o el muelle exigían cierre documental en ventanas muy cortas.
  `.trim(),
}
