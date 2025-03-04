const readlineSync = require('readline-sync');
const vehicleModel = require('../models/vehicleModel');

const vehicleView ={
    showVehicle: ()=>{
        const vehicles = vehicleModel.readVehicle();
        if(vehicles.length === 0){
            console.log('no hay vehiculos para mostrar');
        } else {
            console.log('Vehiculos: ');
            vehicles.forEach((vehicle, index) => {
                console.log(`${index + 1}. ${vehicle.marca} ${vehicle.modelo} (${vehicle.anio})`)
            })
        }  
    },

    promptForVehicle: () =>{ //(marca, modelo, anio) =>{
        marca = readlineSync.question('Ingrese la marca del vehiculo: ')
        modelo = readlineSync.question('Ingrese el modelo del vehiculo: ')
        anio = readlineSync.question('Ingrese el anio del vehiculo: ')
        return {marca, modelo, anio};
    },

    promptForVehicleId: (vehicle) =>{ 
        const vehicleId = readlineSync.question('Ingrese el ID del vehiculo a eliminar: ') -1;
        if(vehicleId < 1 || vehicleId > vehicle.length) {
            console.log('ID de vehiculo invalido');
            return 1;
        }
        return vehicleId
    },

    confimationMessage: (message) =>{
        console.log(message);
    }
};

module.exports = vehicleView;

//CODIGO ANTERIOR: OBSOLETO:

// const vehiculeView = (vehicle) => {
//     if(!vehicle) {
//         return JSON.stringify({ error: 'Vehiculo no encontrado'});
//     }

//     return JSON.stringify(vehicle, null, 2);
// };

// module.exports = {vehiculeView};

// function showVehicle() {
//     if(vehicleModel.length === 0){
//         console.log('no hay vehiculos para mostrar');
//     } else {
//         console.log('Vehiculos: ');
//         vehicle.forEach((vehicle, index) => {
//             console.log(`${index + 1}. ${vehicle.id} - ${vehicle.marca} ${vehicle.modelo} (${vehicle.anio})`);
//         })
//     }  
// }

// function promptForVehicle(marca, modelo, anio) {
//     marca = readlineSync.question('Ingrese la marca del vehiculo: ')
//     modelo = readlineSync.question('Ingrese el modelo del vehiculo: ')
//     anio = readlineSync.question('Ingrese el anio del vehiculo: ')
//     return {marca, modelo, anio};
// }

// function promptForVehicleId(vehicle) {
//     const vehicleId = readlineSync.question('Ingrese el ID del vehiculo a eliminar: ') -1;
//     if(vehicleId < 1 || vehicleId > vehicle.length) {
//         console.log('ID de vehiculo invalido');
//         return -1;
//     }
// }

// function confimationMessage(message) {
//     console.log(message);
// }

// module.exports = { showVehicle, promptForVehicle, promptForVehicleId, confimationMessage };