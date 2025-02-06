// Ejercicio 1: Crear el servidor básico 
// Objetivo: Configurar un servidor TCP que escuche en el puerto 5000. 
// Guía paso a paso: 
// 1. Crea un archivo llamado servidor.js. 
// 2. Importa el módulo que te permite trabajar con servidores TCP 
// (net). 
const net = require('net')

// 3. Usa el método que crea un servidor. 
// Pista: Este método necesita una función que se ejecuta cuando alguien se conecta. 
const server = net.createServer((socket) => {
    //agrega un mensaje en la consola que diga: "¡Un cliente se ha conectado!". 
    console.log('¡Un cliente se ha conectado!');

    //Usa el evento data para detectar cuando el cliente envía datos. 
    //Convierte los datos recibidos (buffer) en texto usando .toString(). 
    socket.on('data', (data)=> {
        console.log('Mensaje recibido del cliente: ', data.toString());

        // Dentro del evento data, agrega una línea para enviar datos al cliente. 
        socket.write('¡Hola, cliente! Tu mensaje fue recibido correctamente.')
    });

    //Usa el evento end para detectar cuándo el cliente se desconecta. 
    socket.on('end', () =>{
        //Dentro del callback del evento, agrega un mensaje en la consola que diga: 
        // "El cliente se ha desconectado." 
        console.log('El cliente se ha desconectado.');
    });


});


// 4. Configura el servidor para que escuche en el puerto 5000. 
// Pista: Usa el método que pone al servidor "a escuchar". 
// 5. Agrega un mensaje en la consola para confirmar que el servidor 
// está listo. 
server.listen(5000, () => {
    console.log('Servidor está escuchando en el puerto 5000');
});



