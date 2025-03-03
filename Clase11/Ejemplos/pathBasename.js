const path = require('path');

//Ejemplo 1: Obtener el nombre del archivo desde una ruta
const rutaEntera = '/home/user/docs/file.txt'
const baseName1 = path.basename(rutaEntera);
console.log('Ejemplo 1 - Nombre del archivo: ', baseName1);

//Ejemplo 2: Obtener el nombre sin la extension
const rutaSinExt = '/home/user/docs/file.txt'
const baseName2 = path.basename(rutaSinExt, '.txt');
console.log('Ejemplo 2 - Nombre del archivo sin extension: ', baseName2);

//Ejemplo 3: Consultas relativas
const rutaRelativa = 'src/utils/helpers.js'
const baseName3 = path.basename(rutaRelativa);
console.log('Ejemplo 3 - Nombre del archivo desde una ruta relativa: ', baseName3);