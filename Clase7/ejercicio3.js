// Ejercicio 3: Servidor de Mensajes Personalizados 
// Consigna: 
// Crea un servidor TCP que permita a los clientes enviar mensajes. El 
// servidor debe responder con un mensaje personalizado dependiendo 
// del contenido del mensaje recibido: 
// • Si el cliente envía "Hola", el servidor debe responder 
// "¡Bienvenido!". 
// • Si el cliente envía "Adiós", el servidor debe responder "¡Hasta 
// luego!" y cerrar la conexión. 
// • Para cualquier otro mensaje, el servidor debe responder "Mensaje 
// recibido: [mensaje del cliente]". 
// Requisitos: 
// • Usa el evento data para recibir y procesar los mensajes del cliente. 
// • Usa el método socket.write() para enviar respuestas personalizadas. 
// • Usa el método socket.end() para cerrar la conexión cuando el 
// cliente envíe "Adiós".

const net = require('net');

const server = net.createServer((socket) =>{
    console.log('Un cliente se ha conectado');

    socket.on('data', (data) =>{
        console.log(`Datos recibidos del cliente ${data.toString()}`);
        const mensaje = data.toString().trim();

        if(mensaje === 'Hola'){
            socket.write('¡Bienvenido!')
        } else if (mensaje === 'Adios') {
            socket.write('¡Hasta luego!')
            socket.end();
        } else{
            socket.write('Mensaje recibido: ', mensaje)
        }
    })
})

server.listen(8080, () => {
    console.log('Servidor escuchando en el puerto 8080.');
});