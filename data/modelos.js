/* =========================================================================
   MODELOS ESTÁNDAR DE BÁSCULAS — fuente de datos editable
   -------------------------------------------------------------------------
   Rellena este array cuando la empresa facilite los modelos reales.
   NO se han inventado nombres, medidas ni capacidades: todos los campos
   quedan como marcadores [PENDIENTE] hasta recibir la información oficial.

   Estructura de cada modelo:
   {
     ref:        'Nombre o referencia del modelo',
     tipo:       'Hormigón | Metálica | A medida',
     estructura: 'Descripción de la estructura',
     longitud:   'p. ej. 18 m',
     anchura:    'p. ej. 3 m',
     capacidad:  'p. ej. 60 t',
     division:   'p. ej. 20 kg',
     modulos:    'p. ej. 3',
     instalacion:'Sobresuelo | Empotrada',
     foto:       'img/fotos/…',        // dejar '' si no hay foto
     ficha:      'docs/….pdf',         // dejar '' si no hay ficha
     caracteristicas: ['…', '…'],
     aplicaciones:    ['…', '…']
   }
   ========================================================================= */

window.MODELOS = [
  // Ejemplo de plantilla (duplícalo por cada modelo real):
  // {
  //   ref: 'BP-18/60', tipo: 'Hormigón', estructura: 'Puente de hormigón armado',
  //   longitud: '18 m', anchura: '3 m', capacidad: '60 t', division: '20 kg',
  //   modulos: '3', instalacion: 'Sobresuelo', foto: 'img/fotos/modelo-bp1860.jpg',
  //   ficha: 'docs/bp-1860.pdf',
  //   caracteristicas: ['Células de carga de compresión', 'Indicador homologado'],
  //   aplicaciones: ['Plantas de áridos', 'Cooperativas']
  // }
];
