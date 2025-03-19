// Ejercicio 3: Cálculo de Hash Simple 
// Escribe un script en Node.js que use el módulo crypto para generar un 
// hash SHA-256 de un texto ingresado por el usuario. Muestra el hash en 
// la consola.

const crypto = require('crypto');
const readlineSync = require('readline-sync');

// datos que queremos hashear
const data = readlineSync.question('Ingrese el texto a convertir en hash: ')

// creamos el objeto hash usando el algoritmo sha256
const hash = crypto.createHash('sha256')

//actualizar el hash con los datos
hash.update(data)

// obtener el hash en formato hexadecimal
const hashOutput = hash.digest('hex')

// mostrar el hash generado
console.log(' Hash de sha256: ', hashOutput);
