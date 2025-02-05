// DESAFÍO 1: Cliente con Reconexión Automática     
// Objetivo: Crear un cliente TCP que se conecte a un servidor, pero si la 
// conexión se pierde, debe intentarlo nuevamente cada 3 segundos. 
// El cliente debe: 
// Conectarse al servidor en el puerto 5000. 
// Enviar un mensaje inicial: "¡Hola, servidor!". 
//    Escuchar el evento 'close' y volver a conectarse tras 3 segundos. 
//    Escuchar y manejar 'error', mostrando el mensaje en consola. 

const { log } = require('console');
const net = require('net');
const PORT = 5000;
const HOST = 'localhost';

//Conectando al servidor, en el puerto 5000
const client = net.createConnection({port: PORT, host: HOST}, () => {
})

//Conectando al servidor y enviar mensaje al servidor
client.on('conect', () => {
    console.log('Conectado al servidor...');
    client.write('Hola servidor');
}) 

//Escuchar el evento close y volver a conectarse tras 3 segundos
client.on('close', () => {
    console.log('Conexión cerrada. Reconectando en 3 segundos...');
    setTimeout(() => {
        console.log('Intentando reconectar...');
        client.connectCreaatConnection({ port: PORT, host: HOST})
    }, 3000); 
});

//Escuchar y manejar error
client.on('error', (err) =>{
    console.log('Error: ', err.message);    
});

