//Paso 1: Importa modulos
const { log } = require('console');
const net = require('net');
const {v1: uuidv1, v3: uuidv3, v4: uuidv4, v5: uuidv5} = require('uuid');

//Definir que estamos usando el URL del ejemplo
const NAMESPACE = uuidv3.URL;

//Crear servidor
const server = net.createServer((socket) =>{
    //Crear un UUID para cada una de las diferentes versiones para la conexion
    const idv1 = uuidv1();
    const idv3 = uuidv3("usuario1", NAMESPACE);
    const idv4 = uuidv4();
    const idv5 = uuidv5("usuario2", NAMESPACE);

    //Imprimimos los UUID en consola
    console.log("Conexión establecida");
    console.log("UUID v1: ", idv1);
    console.log("UUID v3: ", idv3);
    console.log("UUID v4: ", idv4);
    console.log("UUID v5: ", idv5);

    //manejamos evento data
    socket.on('data', (data) =>{
        console.log(`Datos recibidos ${data}`);
    });

    //Manejamos evento end
    socket.end('end', ()=>{
        console.log('Conexión finalizada');
    });
});

server.listen(8080, ()=>{
    console.log('Servidor en el puerto 8080');
});