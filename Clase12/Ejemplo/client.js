//Paso 10: importar modulos
const net = require('net')

//Paso 11: Crear conexion TCP al servidor que esta escuchando en el puerto 4000
const client = net.createConnection({port: 4000}, ()=>{
    console.log('Conectado con el servidor');
    
    //enviamos un id de vehiculo al servidor
    const vehicleId = '2';
    client.write(vehicleId); //enviando el ID al servidor
});

//Paso 10: manejar evento data
client.on('data', (data) =>{
    console.log('Respuesta del servidor: ', data.toString());
    //cerrar conexion con el cliente despues de recibir la respuesta
    client.end()
});

//Paso 11: evento end
client.on('end', ()=>{
    console.log('Conexion cerrada');
});