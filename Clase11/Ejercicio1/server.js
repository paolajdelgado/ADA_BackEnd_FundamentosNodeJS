const net = require('net');
const path = require('path');

//Crear conexion
const server = net.createServer((socket) =>{
    socket.on('data', (data) =>{
        //recibir ruta del cliente, transformar datos a string y eliminar espacios vacios (trim)
        const inputPath = data.toString().trim();
        //Verificar si es un ruta absoluta
        const isAbsolute = path.isAbsolute(inputPath);
        //Mostrar en consola que tipo de ruta es
        const response = isAbsolute ? 'La ruta es absoluta' : 'La ruta es relativa';
        //Enviar la respuesta al cliente
        socket.write(response);       
    });

    //Cerrar conexión con cliente de forma ordenada
    //'Close' lo puede hacer ordenada o abruptamente
    socket.on('end', () =>{
        console.log('Cliente desconectado');
    });
});



//Escuchar el servidor en el puerto especificado
server.listen(8080, ()=>{
    console.log('Servidor escuchando en el puerto 8080');
})

