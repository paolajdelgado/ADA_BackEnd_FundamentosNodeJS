//Paso 1: Importar modulo net
const net = require('net');
const {v4: uuidv4} = require('uuid');

//Paso 2: Conectar servidor TCP, recibir el UUID y mostrarlo en consola
const client = net.createConnection(3000, 'localhost');

// //Mostrar UUID v4
const idv4 = uuidv4();
console.log("UUID V4 (Aleatoria): ", idv4);


//Finaliza conexion
client.end('end', ()=>{
    console.log('Conexión finalizada');
});

