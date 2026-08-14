/* =========================================================================
   PROYECTOS / INSTALACIONES REALES — fuente de datos editable
   -------------------------------------------------------------------------
   Rellena este array con las instalaciones reales de la empresa. La galería
   de proyectos.html usa las categorías del campo "cat" para los filtros:
     'hormigon' | 'metalicas' | 'medida' | 'automatizadas' | 'modernizaciones'

   Estructura de cada proyecto:
   {
     titulo:   'Título del proyecto',
     cat:      ['hormigon', 'automatizadas'],   // una o varias categorías
     sector:   'Sector del cliente',
     tipo:     'Tipo de báscula',
     medidas:  'p. ej. 18 × 3 m',
     capacidad:'p. ej. 60 t',
     necesidad:'Necesidad inicial del cliente',
     solucion: 'Solución instalada',
     automatizaciones: ['ANPR', 'Barrera'],
     media:    'img/fotos/….jpg',   // foto o vídeo (.mp4)
     tipoMedia:'img | video'
   }
   ========================================================================= */

window.PROYECTOS = [
  // Ejemplo de plantilla (duplícalo por cada proyecto real):
  // {
  //   titulo: 'Báscula puente para planta de áridos',
  //   cat: ['hormigon', 'automatizadas'], sector: 'Áridos', tipo: 'Hormigón 18 m',
  //   medidas: '18 × 3 m', capacidad: '60 t',
  //   necesidad: 'Pesaje de camiones sin control de accesos.',
  //   solucion: 'Báscula de hormigón sobresuelo con ANPR y barrera.',
  //   automatizaciones: ['Lectura de matrículas', 'Barrera automática', 'Ticket'],
  //   media: 'img/fotos/proyecto-aridos.jpg', tipoMedia: 'img'
  // }
];
