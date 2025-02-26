//Paso1: importar modulos
const http = require('http'); //Trabajar con solicitudes que se mandan a los navegadorez
const fs = require('fs') //trabajar con archivos

// Paso2: Definir puerto
const PORT = 3000;

//Crear servidor
const server = http.createServer((req, res) =>{ //En el modulo http se necesita REQUEST - solicitud (client) y RESPONSE - respuesta (server)
    //leemos el archivo datos.json
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
});

server.listen(PORT, () =>{
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

