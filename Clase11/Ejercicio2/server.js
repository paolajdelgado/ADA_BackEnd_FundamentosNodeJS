const net = require('net');
const path = require('path');

const server = net.createServer((socket) => {
    socket.on('data', (data) =>{
        const inputPath = data.toString().trim();
        const normalize = path.normalize(inputPath);
        console.log(normalize);
        socket.write('La ruta normalizada es: ' + normalize);
    });

    socket.on('end', ()=>{
        console.log('El cliente se ha desconectado');
    });
});

server.listen(8081, ()=>{
    console.log('Servidor escuchando en el puerto 8081');  
});