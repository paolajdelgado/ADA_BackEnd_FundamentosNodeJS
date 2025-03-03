const net = require('net');

const client = net.createConnection({port: 4000}, ()=>{
    console.log('Conectando al servidor');

    const bookID = '2';
    client.write(bookID);
});

client.on('data', (data)=>{
    console.log('Respuesta del servidor: ', data.toString());
    client.end();
});

client.on('end', ()=>{
    console.log('Conexion finalizada');
})