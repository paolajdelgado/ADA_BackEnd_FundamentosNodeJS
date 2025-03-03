// Ejercicio 1: Sistema de Gestión de Libros        
// Consigna: 
// Vamos a implementar un sistema de gestión de libros donde el cliente 
// pueda solicitar información sobre un libro específico a través de su ID. El 
// servidor procesará la solicitud, buscará el libro en una base de datos 
// simulada (archivo JSON) y devolverá la información al cliente. 
// 1. Servidor TCP: 
// o El servidor debe escuchar en el puerto 4000.
// o Debe recibir solicitudes del cliente que incluyan el ID de un 
// libro.  

const net = require('net');
const bookController = require('./controllers/bookController')

const server = net.createServer((socket) => {
    console.log("🔗 Conectado al servidor");

    socket.on('data', (data)=>{
        const bookId = data.toString().trim();
        console.log(`Solicitud recibida: ID ${bookId}`);

        const response = bookController.handleRequest(bookId);
        socket.write(response);
    })

    socket.on('end', ()=>{
        console.log('Cliente desconectado');
    })
});

server.listen(4000, ()=>{
    console.log('Servidor escuchando en el puerto 4000');
});


