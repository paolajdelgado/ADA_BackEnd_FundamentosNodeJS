const net = require('net');

const client = net.createConnection({port: 8082}, ()=>{
    console.log('Conexión con el servidor establecida');
    
    client.write('/home/user/docs/file.txt');
});

client.on('data', (data)=>{
    console.log(data.toString());
    client.end();
});

client.on('end', () => {
    console.log('Desconectando del servidor');
});

