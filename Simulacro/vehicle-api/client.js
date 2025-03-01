const net = require('net');
const readlineSync = require("readline-sync");
const { vehicleController } = require('./controllers/vehicleController');


const client = net.createConnection({port: 8080}, ()=>{
    console.log('Conectado al servidor');
});


function menu() {
    let opciones;
    do{
        console.log('\nMenu de Opciones: ');
        console.log('1. Consulta de vehiculos');
        console.log('2. Agregar vehiculo');
        console.log('3. Eliminar vehiculo');
        console.log('4. Salir');

        opciones = readlineSync.question('Elija la opcion deseada: ')

        switch (opciones) {
            case '1':
                vehicleController.showVehicle();
                break;
            case '2':
                vehicleController.addVehicle();
                break;
            case '3': 
                vehicleController.deleteVehicle();
                break;
            default:
                console.log('Opcion invalida');
                break;
        }
    } while (opciones !== '4')
}

menu();


client.on('data', (data) =>{
    console.log("📩 Mensaje recibido:", data.toString());
})

client.on('end', ()=>{
    console.log("🔚 El servidor ha cerrado la conexion");
})




