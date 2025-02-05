// DESAFÍO 2: Cliente con Pausa y Reanudación de Datos       
// Objetivo: Simular un cliente que pausa la recepción de datos por 5 
// segundos y luego la reanuda. 
// El cliente debe: 
// Conectarse al servidor y enviar un mensaje inicial. 
// Escuchar el evento 'data' y mostrar los datos en consola. 
// Pausar la recepción de datos usando client.pause() a los 3 segundos. 
// Reanudar la recepción de datos con client.resume() a los 8 segundos. 
// Finalizar la conexión tras 15 segundos.

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


//Generar evento data
client.on('data', (data) => {
    console.log('Datos: ', data.toString())
})

//Pausar evento a los 3 s
setTimeout(() => {
    console.log('Se ha pausado la recepcion de datos');
    client.pause();
}, 3000);

//Reaunudar recepcion de datos a los 8s
setTimeout(() => {
    console.log('Se ha reanudados la recepcion de datos');
    client.resume();
}, 8000);

//Cerrar la conexion a los 15s
setTimeout(() => {
    console.log('Cerrando la conexion');
    client.end();
}, 15000);

//Manejar error
client.on('error', (err) =>{
    console.log('Error: ', err.message)
})