// Ejercicio 1: Crear un Servidor TCP con Persistencia de Datos 
// Consigna: 
// Crea un servidor TCP que reciba mensajes de los clientes y los guarde en 
// un archivo JSON. Luego, permite a los clientes consultar todos los 
// mensajes almacenados. 
// Pasos: 
// • Usa el módulo net para crear el servidor. 
// • Usa fs para guardar los mensajes en un archivo mensajes.json. 
// • Implementa un comando especial (ej: /historial) para que los 
// clientes puedan consultar todos los mensajes. 

const net = require('net');
const fs = require('fs');
const path = require('path')

const ruta = path.join(__dirname, 'mensajes.json');

const server = net.createServer((socket) =>{
    console.log('Se ha conectado un cliente');

    socket.on('data', (data) =>{
        const mensaje = data.toString().trim();

        if(mensaje === '/historial'){
            const historial = fs.readFileSync(ruta, 'utf-8');
            socket.write(`Estos son los mensajes guardados: \n${historial}`);
            socket.write()
        } else {
            const archivo = JSON.parse(fs.readFileSync(ruta, 'utf-8') || '[]');
            archivo.push({ mensaje });
            fs.writeFileSync(ruta, JSON.stringify(archivo, null, 2), 'utf-8');
            socket.write('Menaje guardado exitosamente')
        }
    })
    

    socket.on('end', () => {
        console.log('Conexion finalizada');
    })
})

server.listen(8080, () => {
    console.log('Servidor escuchando en el puerto 8080');
})

