const net = require('net');
const readline = require('readline-sync');


const options = {
    port: 5000,
    host: 'localhost'
};

const client = net.createConnection(options, ()=>{
    console.log('Conectado al servidor');
});

client.on('data', (data)=>{ 
    console.log('El servidor dice: ' + data);

    sendMessage();
});

client.on('error', (err) =>{
    console.log(err.message);
});

function sendMessage(){
    const mensaje = readline.question('Ingrese su mensaje: ');
    if(mensaje == 'Salir'){
        client.end();
    } else {
        client.write(mensaje);
    }    
}

