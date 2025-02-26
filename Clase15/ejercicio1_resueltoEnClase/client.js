//Construcion cliente basico para probar que el servidor funciona
//TAREA: Modificarlo



// paso 6: importacion en el cliente
const net = require('net')
const readline = require('readline-sync');

//paso 7: creamos al cliente
const client = net.createConnection({ port: 3000 }, () => {
    console.log('conectado al servidor');
   const pregunta= readline.question('ingrese  su  mensaje o /historial: ');
client.write(pregunta)
})

// evento data
client.on('data', (data) => {
    console.log('Respuesta del servidor: ', data.toString());
})

// evento end
client.on('end', () => {
    console.log('Descconectado del servidor');
})

