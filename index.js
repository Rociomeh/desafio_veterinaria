const fs = require('fs');
const operaciones = require('./operaciones');
const operacion = process.argv[2];
const args = process.argv.slice(3);

if (operacion === 'registrar') {

  const [nombre, edad, tipo, color, enfermedad] = args;
  operaciones.registrar(nombre, edad, tipo, color, enfermedad);

} else if (operacion === 'leer') {
  operaciones.leer();

} else {
  console.error('Operación no válida. Las opciones son: registrar o leer.');
}
