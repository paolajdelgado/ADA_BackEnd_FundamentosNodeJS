//Paso 7: Importar modulos
const net = require('net');
const vehicleController = require('./controllers/vehiclerController');

//Paso 8: Crear el servidor
const server = net.createServer((socket) =>{
    console.log('Cliente conectado');

    socket.on('data', (data) =>{
        //convertimos los datos recibidos de buffer a una cadena de texto y eliminamos espacios
        const vehicleId = data.toString().trim();
        console.log(`Solicitud recibida: ID ${vehicleId}`);

        //llamar al metodo handlerRequest del controlador para manejar las solicitudes
        //este metodo toma el ID del vehiculo y devuelve una respuesta formateada
        const response = vehicleController.handleRequest(vehicleId);

        //enviar la respuesta al cliente usando el metodo write
        socket.write(response);
    });

    //evento end = sucederá cuando el cliente se desconecte
    socket.on('end', ()=>{
        console.log('Cliente desconectado');
    });
});

//Paso 9: Escuchar al servidor
server.listen(4000, ()=>{
    console.log('Servidor escuchando en el puerto 4000');
});