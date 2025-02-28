//Ejercicio1
// Objetivo: 
// Crear un servidor TCP que asigne un UUID v4 único a cada conexión y 
// envíe el UUID de vuelta al cliente.

//Paso 1: Importar modulos
const net = require('net');
const {v4: uuidv4} = require('uuid');

//Paso 2: Crear un servidor TCP que generer UUID v4 para cada conexión y envíe el UUID al cliente
const server = net.createServer((socket) =>{
    const idv4 = uuidv4();

    console.log('Conexion establecida: ');
    console.log('UUID v4: ', idv4);

    socket.on('data', (data) =>{
        console.log('Datos recibidos: ', data.toString());
    });

    socket.end('end', () => {
        console.log('Conexión finalizada');
    });
});

server.listen(3000, ()=>{
    console.log('Servidor escuchando en el puerto 3000');
});