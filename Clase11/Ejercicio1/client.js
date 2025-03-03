const net = require('net');

const client = net.createConnection({port: 8080}, ()=>{
    console.log('Conexión establecida con el servidor');

    client.write('/home/user/document.txt'); //ruta absoluta
    client.write('documento.txt'); //ruta relativa
    client.write('/home/usuarios/file.txt') //ruta absoluta
});

client.on('data', (data) =>{
    console.log(data.toString()); 
    //client.end(); //Cortar una vez que se reciba la informacion
});

client.on('end', ()=>{
    console.log('Desconectado del servidor');
});