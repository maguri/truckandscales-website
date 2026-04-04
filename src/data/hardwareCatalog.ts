/**
 * Resumen del catálogo hardware (ListadoTarifasDastions / Truck & Scales & BP_BOX).
 * Sin precios en web: solo descripciones operativas para facilitar el briefing con ventas.
 */
export type HardwareIconKey =
  | 'control-signals'
  | 'weigh-station'
  | 'weigh-station-screen'
  | 'reader-qr-rfid'
  | 'printer-industrial'
  | 'touchscreen-dock'
  | 'weight-display-outdoor'
  | 'camera-ocr'
  | 'camera-overhead'
  | 'intercom-ip'
  | 'barrier'
  | 'induction-loop'
  | 'traffic-light-led'
  | 'poles-structures'
  | 'special-panels'
  | 'analytics-dashboard'

export type HardwareItem = {
  name: string
  description: string
  iconKey: HardwareIconKey
}

export type HardwareGroup = {
  title: string
  intro?: string
  items: HardwareItem[]
}

export const hardwareGroups: HardwareGroup[] = [
  {
    title: 'Armario de báscula',
    intro:
      'Cuadro industrial para automatizar la báscula: PLC, entradas y salidas digitales, relés en carril DIN y bornes numerados. Materiales habituales: acero inoxidable o plástico técnico según entorno.',
    items: [
      {
        name: 'Control y señales',
        iconKey: 'control-signals',
        description:
          'Concentrador de señales de campo (barreras, semáforos, sensores) enlazado al software Truck & Scales para orquestar el pesaje sin pasos manuales innecesarios.',
      },
    ],
  },
  {
    title: 'Terminales de autoservicio WeighStation',
    intro:
      'Tótems para que el conductor complete el flujo de pesaje con mínima ayuda del personal: identificación, interfono e impresión cuando proceda.',
    items: [
      {
        name: 'WeighStation',
        iconKey: 'weigh-station',
        description:
          'Terminal autoservicio con identificación por tarjetas RFID ilimitadas o códigos QR, impresora e interfono. Integración nativa con Truck & Scales Cloud. Incluye concepto de armario base de control.',
      },
      {
        name: 'WeighStationScreen',
        iconKey: 'weigh-station-screen',
        description:
          'Versión con pantalla táctil de gran formato, protección IP65 y soporte en acero inoxidable. Pensada para instrucciones visuales, validaciones y experiencia guiada en muelle o patio.',
      },
    ],
  },
  {
    title: 'Identificación, impresión y visualización',
    items: [
      {
        name: 'Lector QR / RFID',
        iconKey: 'reader-qr-rfid',
        description:
          'Identificación de usuarios autorizados vinculada a la gestión de Truck & Scales; incluye conversor, batería de respaldo y soporte de montaje según proyecto.',
      },
      {
        name: 'Impresora industrial de ticket / albarán',
        iconKey: 'printer-industrial',
        description:
          'Impresora compatible con el módulo de automatización para documentos de báscula en rollo, con conectividad Ethernet al armario o PC de servicio.',
      },
      {
        name: 'Pantalla táctil de muelle',
        iconKey: 'touchscreen-dock',
        description:
          'Monitor táctil robusto para supervisión local, firma de conformidad o previsualización (por ejemplo imagen cenital del contenedor o bañera).',
      },
      {
        name: 'Display de peso en exterior',
        iconKey: 'weight-display-outdoor',
        description:
          'Indicador grande formato para que el conductor vea el peso sin abandonar la cabina, integrado con la aplicación.',
      },
    ],
  },
  {
    title: 'Visión y comunicaciones',
    items: [
      {
        name: 'Cámaras para OCR de matrícula',
        iconKey: 'camera-ocr',
        description:
          'Cámaras homologadas para el motor OCR de Truck & Scales: lectura automática para autorizar el pesaje y enlazar eventos con la trazabilidad.',
      },
      {
        name: 'Cámara cenital',
        iconKey: 'camera-overhead',
        description:
          'Supervisión del estado de carga, contenedor o bañera; útil en agroalimentario, residuos o productos a granel cuando la normativa o el cliente exigen evidencias.',
      },
      {
        name: 'Interfonía IP',
        iconKey: 'intercom-ip',
        description:
          'Puntos de audio manos libres resistentes (IP66 / IK10) compatibles con centralita SIP para asistencia remota al conductor.',
      },
    ],
  },
  {
    title: 'Señalización y cerramiento de carril',
    items: [
      {
        name: 'Barrera automática',
        iconKey: 'barrier',
        description:
          'Conjunto de barrera, cuadro, placa de anclaje y fotocélulas para delimitar el carril de pesaje y evitar pasos indebidos.',
      },
      {
        name: 'Bucle inductivo',
        iconKey: 'induction-loop',
        description:
          'Detección de presencia vehicular para disparar secuencias seguras de apertura, lectura y registro.',
      },
      {
        name: 'Semáforo LED',
        iconKey: 'traffic-light-led',
        description:
          'Señalización rojo/verde de alta visibilidad para coordinar el movimiento en báscula y cruce de peatones internos.',
      },
      {
        name: 'Postes y estructuras',
        iconKey: 'poles-structures',
        description:
          'Soportes para cámaras, lectores o señalización; se dimensionan en función de altura de vehículo y layout del patio.',
      },
    ],
  },
  {
    title: 'Servicios asociados (sin hardware físico)',
    items: [
      {
        name: 'Cuadros y montajes especiales',
        iconKey: 'special-panels',
        description:
          'Armarios interior/exterior bajo requisitos ATEX, espacio limitado o rediseño de una báscula existente.',
      },
      {
        name: 'Analítica y cuadros de mando',
        iconKey: 'analytics-dashboard',
        description:
          'Licencias para consolidar pesajes, gráficos de producción y, si aplica, proyectos de analítica avanzada sobre los datos capturados.',
      },
    ],
  },
]
