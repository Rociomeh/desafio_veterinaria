const fs = require('fs');
const archivoCitas = './citas.json';

function registrar(nombre, edad, tipo, color, enfermedad) {

  const cita = {
    nombre,
    edad,
    tipo,
    color,
    enfermedad,
  };

  leerCitas((citas) => {
    citas.push(cita);
    escribirCitas(citas);
  });
}

function leer() {
  leerCitas((citas) => {

    console.log(citas);
  });
}

function leerCitas(callback) {

  fs.readFile(archivoCitas, 'utf-8', (err, data) => {
    if (err) {
      console.error('Error al leer el archivo de citas:', err);
      return;
    }
    const citas = JSON.parse(data) || [];
    callback(citas);
  });
}

function escribirCitas(citas) {

  const jsonData = JSON.stringify(citas);

  fs.writeFile(archivoCitas, jsonData, (err) => {
    if (err) {
      console.error('Error al escribir el archivo de citas:', err);
      return;
    }
    console.log('Cita registrada correctamente.');
  });
}

module.exports = {
  registrar,
  leer,
};
