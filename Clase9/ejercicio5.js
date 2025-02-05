// DESAFÍO 5: Cliente con Eventos y Control de Referencias      
// Objetivo: Aplicar ref() y unref() para controlar la terminación del 
// proceso de Node.js. 
// El cliente debe: 
// Conectarse y enviar un mensaje inicial. 
// Escuchar los eventos 'data', 'end', 'close' y 'error'. 
// Llamar a client.unref() a los 10 segundos para permitir que el proceso 
// termine. 
// A los 15 segundos, llamar a client.ref() para que el proceso se 
// mantenga activo. 
// Cerrar la conexión a los 20 segundos.


const net = require('net');
const PORT = 5000;
const HOST = 'localhost'

//Conectarse a servidor 
const client = net.createConnection({port: PORT, host: HOST});

//Mostrar mensaje inicial
client.on('conect', () =>{
    console.log('Conectando al servidor...');
    client.write('Hola servidor');
});

//Escuchar eventos
    //evento data
client.on('data', (data) =>{
    console.log('Mensaje recibido: ', data.toString());
})

    //evento error
client.on('error', (err) =>{
    console.log('Error: ', err.message);
});

    //evento end
client.on('end', () =>{
    console.log('El servidor cerró la conexion.');
})

    //evento close
client.on('close', () =>{
    console.log('Conexión cerrada.');
})

//Terminar proceso a 10s
setTimeout(() => {
    console.log('Terminando proceso.')
    client.unref()
}, 10000);

//Reactivar proceso a los 15s
setTimeout(() => {
    console.log('Reactivando proceso.')
    client.ref()
}, 15000);


//Cerrar conexion a los 20s
setTimeout(() => {
    console.log('Cerrando conexión');
    client.end()
}, 20000);
