// Ejercicio 2: Servidor TCP que Normaliza Rutas 
// Objetivo: Crear un servidor TCP que normalice las rutas recibidas 
// utilizando path.normalize y envíe la ruta normalizada al cliente. 
// Pasos: 
// 3. Responder al Cliente: 
// o Envía la ruta normalizada al cliente. 
// Instrucciones: 
// • Ejecuta el servidor y conecta un cliente. 
// • Envía rutas con barras redundantes y puntos (e.g., 
// ./docs/../file.txt) para verificar la funcionalidad. 

const net = require('net');

const client = net.createConnection({port: 8081}, ()=>{
    console.log('Conexion establecida con el servidor');    
    
    client.write('./docs/../file.txt');
    client.write('/home//user/files/hola.txt');
})


client.on('data', (data) =>{
    console.log(data.toString()); 
    client.end(); //Cortar una vez que se reciba la informacion
});

client.on('end', ()=>{
    console.log('Desconectado del servidor ');
});