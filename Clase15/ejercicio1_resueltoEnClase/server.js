//paso 1:; importamos modulos necesarios
const net = require ('net'); //Crear servidor
const fs = require('fs'); //manejar archivos
const path = require('path'); //manejar rutas

//paso 2: definimos la ruta donde se guardarán los mensajes con formato json
const rutaMensajes = path.join(__dirname, 'mensajes.json');

//paso 3: verificar si el archivo JSON existe
//Si no, crearlo con array vacío dentro

if(!fs.existsSync(rutaMensajes)){
    fs.writeFileSync(rutaMensajes, '[]', 'utf-8'); //Si no existe, crealo con un array vacío
};

//paso 4: Creamos el servidor
const server = net.createServer((socket) =>{
    console.log('Cliente conectado');

    //Manejar los datos recibidos del cliente
    socket.on('data', (data) => {
        const mensaje = data.toString().trim() //toString() convierte buffer a texto -- trim() saca los espacios

        //si el mensaje recibido es "/historial", enviamos todos los mensajes almacenados
        //el comando se llama "/historial" porque así lo pide la consigna
        let mensajito =[];
        if(mensaje === '/historial') {
            //Leemos el contenido del archivo mensaje.json
            const historial = fs.readFileSync(rutaMensajes, 'utf-8')
            //enviamos el historial (todos los mensajes) al cliente
            socket.write(`Historial de mensajes: \n${historial}`)
        } else { //en caso de que el cliente no mande "/hisotial" (comando), se hace lo siguiente
            //Leemos el archivo json y lo convertimos en un array de objetos
            const mensajes = JSON.parse(fs.readFileSync(rutaMensajes, 'utf-8') || '[]')
            //Agregamos el nuevo mensaje con la fecha y hora actual
            mensajito.push({fecha: new Date().toISOString(), mensaje})
            //Guardamos el array actualizado en el archivo mensajes.json con un formato legible
            fs.writeFileSync(rutaMensajes, JSON.stringify(mensajes, null, 2), 'utf-8')
            //enviamos una confirmacion de que se guardó bien al cliente
            socket.write('Mensaje guardado correctamente')
        };
    });

    //Manejamos la desconexion del cliente
    socket.on('end', () =>{
        console.log('Cliente desconectado');
    });
});

//paso 5: inicio (escucha) del servidor
server.listen(3000, ()=>{
    console.log('Servidor escuchando en el puerto 3000');
});



