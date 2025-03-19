// Ejercicio 2: Menú Interactivo con readline-sync 
// Crea un script de Node.js que muestre un menú de opciones usando 
// readline-sync. El menú debe permitir al usuario elegir entre tres acciones: 
// ver un mensaje de bienvenida, generar un hash de un texto, o salir.

const readlineSync = require('readline-sync');
const crypto = require('crypto')

console.log('\nPuedes elegir entre las siguientes 3 opciones: ');
console.log('1) Ver un mensaje de bienvenida');
console.log('2) Generar un hash de un texto');
console.log('3) Salir');

const respuesta = readlineSync.question('Que accion deseas realizar? ');

switch(respuesta){
    case '1':
        console.log('Bienvenido!');
        break;
    case '2':
        const data = readlineSync.question('Propociona el mensaje para generar el hash: ')
        const hash = crypto.createHash('sha256')
        hash.update(data)
        const hashOutput = hash.digest('hex')
        console.log(' Hash de sha256: ', hashOutput);
        break;
    case '3':
        console.log('Hasta luego!');
        break;
    default:
        console.log('Opcion invalida. Vuelva a intentarlo.');
        break;
};


