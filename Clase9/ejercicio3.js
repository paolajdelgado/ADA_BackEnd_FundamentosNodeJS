// DESAFÍO 3: Cliente con Timeout y Destrucción de Conexión          
//      Objetivo: Implementar un timeout que cierre la conexión si no recibe 
// datos en 10 segundos. 
//   El cliente debe: 
//    Conectarse y enviar un mensaje inicial. 
//    Configurar un setTimeout() de 10 segundos para cerrar la conexión si 
// no recibe datos. 
//    Escuchar el evento 'data' y cancelar el timeout si recibe información. 
//    Si no recibe datos en 10 segundos, usar client.destroy() y mostrar un 
// mensaje en consola.

const { log } = require('console');
const net = require('net');
const PORT = 5000;
const HOST = 'localhost';

//Conectando al servidor, en el puerto 5000
const client = net.createConnection({port: PORT, host: HOST})

//Conectando al servidor y enviar mensaje al servidor
client.on('conect', () => {
    console.log('Conectado al servidor...');
    client.write('Hola servidor');
}) 


//Configurar settimeout 10sg
client.setTimeout(10000);

//
//Generar evento data
client.on('data', (data) => {
    console.log('Mensaje recibido: ', data.toString())
})

//timeout de 10 s
//Escuchar 'data' y cancelar el time out si recibe información
//usar client.destroy() si no recibe informacion
let timeout = setTimeout(() => {
    console.log('⚠️ No hay datos del servidor, cerrando conexión');
    client.end();
}, 10000);

client.on('data', () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        console.log('⚠️ No hay datos del servidor, cerrando conexión');
        client.destroy();
    }, 10000);
});

//Manejar error
client.on('error', (err) =>{
    console.log('Error: ', err.message)
})


