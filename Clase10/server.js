const { log } = require('console');
const { Socket } = require('dgram');
const net = require('net');

const server = net.createServer((socket) =>{
    console.log('Nuevo cliente conectado:', socket.remoteAddress + ":" + socket.remotePort);

    socket.write('Bienvenido al servidor');

    socket.on('data', (data) =>{
        console.log('Mensaje del cliente ' + socket.remoteAddress + ":" + socket.remotePort + ': ' + data.toString());
        socket.write('Mensaje recibido. Si desea cerrar la conexion escriba "Salir"');
    });

    socket.on('error', (err) =>{
        console.log('Error en el servidor: ', err.message);
    });

    socket.on('close', () =>{
        console.log('Cerrando conexion');
    });
});


server.listen(5000, () =>{
    console.log('Servidor escuchando en el puerto 5000');
});