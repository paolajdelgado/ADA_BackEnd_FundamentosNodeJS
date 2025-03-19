// Ejercicio 1: Conectar y enviar un mensaje al servidor 
const { log } = require('console');
const net = require('net');

const client = net.createConnection({port:5000, host: 'localhost'});
client.on('connect', ()=>{
    console.log('Conectado al servidor');

    client.write('¡Hola, servidor!')
});

client.on('data', (data) =>{
    console.log('Datos recibidos del servidor: ', data.toString());
});


//Ejercicio 2: Implementar un timeout en la conexión 
client.setTimeout(5000, ()=>{
    console.log('Tiempo de espera agotado');
    client.end();
});

//Ejercicio 3: Pausar y reanudar la recepción de datos 
client.on('data', (data)=>{
    console.log('Mensaje recibido del servidor: ', data.toString());
    console.log('Pausando la recepcion de datos');
    client.pause();

    setTimeout(() => {
        console.log('Reanudando la recepcion de datos...');
        client.resume()
    }, 3000)
});

//Ejercicio 4: Manejo de errores en la conexión 
client.on('error', (err)=>{
    console.log('Error: ', err.message);
});

client.on('close', ()=>{
    console.log('Conexion cerrada inesperadamente');
});

//Ejercicio5:  Detectar cuando el servidor cierra la conexión 
client.on('data', (data)=>{
    client.write('Sigues ahi servidor?');
    console.log('Servidor cerro la conexion');
    client.end();
});