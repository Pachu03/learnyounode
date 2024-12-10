const fs = require('fs');

const archivo = process.argv[2];

const contenido = fs.readFileSync(archivo, 'utf8');

const lineas = contenido.split('\n');

console.log(lineas.length - 1);