// DESAFÍO 4: Cliente con Mensajes Temporizados y Cierre Programado 
          
//      Objetivo: Enviar mensajes cada 5 segundos y cerrar la conexión tras 20 segundos. 
//   El cliente debe: 
//    Conectarse y enviar un mensaje inicial.
//    Enviar un mensaje "Mensaje automático" cada 5 segundos. 
//    Escuchar el evento 'data' y mostrar los datos recibidos. 
//    Cerrar la conexión con client.end() tras 20 segundos.

const net = require('net');
const PORT = 5000;
const HOST = 'localhost'

//Conectando al servidor
const client = net.createConnection({port: PORT, host: HOST});

//Enviar mensaje inicial
client.on('conect', () =>{
    console.log('Conectando al servidor...');
    client.write('Hola servidor');
});

//Enviar mensaje cada 5s
setTimeout(() => {
    console.log('Mensaje automatico');
}, 5000); 


//Escuchar evento data
client.on('data', (data) => {
    console.log('Mensaje recibido: ', data.toString());
});



//Cerra conexion tras 20s
setTimeout(() => {
    console.log('Cerrando conexion');
    client.end();
}, 20000);


//Manejando error
client.on('error', (err) => {
    console.log('Error: ', err.message);
});