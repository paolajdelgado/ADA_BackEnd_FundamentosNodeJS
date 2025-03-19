const net = require('net');
const readlineSync = require('readline-sync');

const client = net.createConnection({ port: 8080 }, () => {
    console.log('Conectado al servidor');
    console.log('Bienvenido! Escriba su mensaje a guardar o escriba /historial para consultar los mensajes guardados');
    
    const mensaje = readlineSync.question('Ingrese su mensaje: \n')
    client.write(mensaje);
});

client.on('data', (data) => {
    console.log('Respuesta del servidor:', data.toString());
});

client.on('end', () => {
    console.log('Desconectado del servidor');
});
