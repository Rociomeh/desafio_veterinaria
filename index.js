const fs = require('fs')
 const operaciones = [`
 Registrar:
    Nombre del animal
    Edad
    Tipo de animal
    Color del animal
    Enfermedad
`]
fs.writeFileSync('operaciones.js', operaciones)

const { vaciarJSON } = require('./operaciones') 
vaciarJSON("citas.json")