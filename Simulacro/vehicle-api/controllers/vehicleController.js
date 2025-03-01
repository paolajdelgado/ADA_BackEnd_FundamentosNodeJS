const vehicleModel = require('../models/vehicleModel');
const vehicleView = require('../views/vehicleView');

// const vehicleController = (vehicleId) =>{
//     const vehicle = vehicleModel(vehicleId);
//     return vehicleView(vehicle);
// };

// module.exports = {vehicleController};

function showVehicle() {
    const vehicle = vehicleModel.readVehicle();
    vehicleView.showVehicle(vehicle);
}

function addVehicle() {
    const vehicleDescription = vehicleModel.promptForVehicle(marca, modelo, anio);
    const vehicle = vehicleModel.readVehicle();
    vehicle.push({"id": vehicle.length + 1, "marca": vehicleDescription.marca, "modelo": vehicleDescription.modelo, "anio": vehicleDescription.anio});
    vehicleModel.saveVehicle(vehicle);
    vehicleView.confimationMessage('Vehiculo agregado con exito');
}

function deleteVehicle() {
    const vehicle = vehicleModel.readVehicle();
    if(vehicle.length === 0) {
        vehicleView.addVehicle('No hay vehiculos para eliminar');
        return;
    }
    const vehicleId = vehicleView.promptForVehicleId(vehicle);
    vehicle.splice(vehicleId, 1);
    vehicleModel.saveVehicle(vehicle);
    vehicleView.confimationMessage('Vehiculo eliminado con exito');
}

module.exports = { showVehicle, addVehicle, deleteVehicle };