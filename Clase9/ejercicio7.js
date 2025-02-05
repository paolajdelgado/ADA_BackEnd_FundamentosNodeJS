// DESAFÍO 7: Cliente con Envío de Comandos, Validación y Auto
// Desconexión               
//      Objetivo: Implementar un cliente TCP que permita al usuario ingresar 
// comandos desde la terminal, los valide antes de enviarlos y cierre la 
// conexión si se recibe una respuesta específica del servidor. 
//   El cliente debe: 
//    Conectarse al servidor en el puerto 5000. 
const net = require('net');
const PORT = 5000;
const HOST = 'localhost';

const client = net.createConnection({port: PORT, host: HOST});


//    Leer la entrada del usuario desde la terminal con readline. 
//    Solo permitir comandos que empiecen con CMD_ (ejemplo: 
// CMD_HOLA, CMD_ADIOS). 
//    Enviar los comandos al servidor solo si son válidos. 
//    Escuchar respuestas del servidor. 
//    Si el servidor responde "EXIT", cerrar la conexión y terminar el 
// programa. 
//     PISTA: Usen readline para capturar la entrada del usuario y RegExp 
// para validar los comandos.


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
function enviarMensaje() {
    let msg = new RegExp('/^CMD_\w+$/'); 
    readline.question('Escribe un mensaje (iniciando con "CMD_"): ', (msg) => {
        if (msg === 'CMD_EXIT') {
            client.write('Cerrando conexión')
            client.end();
            readline.close();
        } else if (msg === 'CMD_HOLA'){
            client.write('Hola cliente');
            enviarMensaje();
    }});
}

client.on('connect', enviarMensaje);


//Manejando error
client.on('error', (err) => {
    console.log('Error: ', err.message);
});