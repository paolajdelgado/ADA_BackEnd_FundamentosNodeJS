// Importamos los módulos necesarios
const net = require('net');  // Módulo para crear un servidor TCP
const fs = require('fs');    // Módulo para manejar archivos (leer y escribir JSON)
const path = require('path'); // Módulo para manejar rutas de archivos

// Definimos la ruta donde se guardarán los mensajes en formato JSON
const rutaMensajes = path.join(__dirname, 'mensajes.json');

// Verificamos si el archivo mensajes.json existe, si no, lo creamos con un array vacío
if (!fs.existsSync(rutaMensajes)) {
    fs.writeFileSync(rutaMensajes, '[]', 'utf-8');

}








// const net = require('net');
// const vehicleController = require('../vehicle-api/controllers/vehicleController');


// const server = net.createServer((socket) => {
//     console.log('Cliente conectado');

//     // Evento data
//     socket.on('data', (data) => {
//         // Convertimos los datos recibidos a una cadena de texto y eliminamos espacios
//         const vehicleId = data.toString().trim()
//         console.log(`Solicitud recibida: ID ${vehicleId}`);

//     // Llamamos al método handleRequest del controlador para manejar la solicitud
//     // este método toma el id del vehiculo y devuelve una respuesta formateada
//     const response = vehicleController(vehicleId)
//         // Enviamos la respuesta al cliente usando el método write
//         socket.write(response)
//         socket.end()
//     })
//     // Evento end
//     socket.on('end', () => {
//         console.log('Cliente desconectado');
//     })
//     socket.on('error', (err)=>{
//         console.error('Error en el servidor:', err)
//     })
// })

// server.listen(8080, () => {
//     console.log('Servidor escuchando en el puerto 8080')
// })