const vehicleModel = require('../models/vehicleModel');
const vehicleView = require('../views/vehicleView');

const vehicleController = (vehicleId) =>{
    const vehicle = vehicleModel(vehicleId);
    return vehicleView(vehicle);
};

module.exports = {vehicleController};
