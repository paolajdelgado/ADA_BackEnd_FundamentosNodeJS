//Paso 1: Importar modulos
const net = require('net');
const {v5: uuidv5} = require('uuid');
const fs = require('fs') //trabajar con archivos

//Paso 2: Crear servidor TCP que generer UUID v5
//Espacio de nombres
const NAMESPACE = uuidv5.URL;

//TCP
const server = net.createServer((socket) =>{
    const idv5 = ("usuario", NAMESPACE);
    console.log(`UUID V5: ${idv5}`);

    fs.readFile('datos.json', 'utf-8', (err, data) =>{
            if(err) {
                //si hay un error, mostramos un mensaje
                res.end('No se pudo leer el archivo JSON') //mensaje de error
                return;
            }
    
            //enviamos el contenido del archivo json al navegador
            res.setHeader('Content-Type', 'application/json'); //configurando el tipo de contenido
            res.end(data); //enviamos el contenido del archivo JSON
    });

    socket.end('end', ()=>{
        console.log('Conexión finalizada');
    });
});

server.listen(3000, ()=>{
    console.log('Servidor escuchando en puerto 3000');
});