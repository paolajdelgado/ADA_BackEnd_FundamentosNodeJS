//Paso 1: Importar modulo net
const net = require('net');
const {v5: uuidv5} = require('uuid');

//Paso 2: Conectar servidor TCP, recibir el UUID y mostrarlo en consola
const client = net.createConnection(3000, 'localhost');

// //Mostrar UUID v4
const namev5 = "Ejemplo";
const NAMESPACE = uuidv5.URL;
const idv5 = uuidv5(namev5, NAMESPACE);
console.log("UUID V5 (Nombre y Espacio de Nombres): ", idv5);


//Finaliza conexion
client.end('end', ()=>{
    console.log('Conexión finalizada');
});

