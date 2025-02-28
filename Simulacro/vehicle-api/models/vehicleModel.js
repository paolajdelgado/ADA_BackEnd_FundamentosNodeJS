const fs = require('fs');
const path = require('path');
const { json } = require('stream/consumers');

const dataPath = path.join(__dirname, '../data/vehicles.json')
//const dataPath = ('../data/vehicles.json')

const vehicleModel = {
    getVehicleID: (id) => {
        const rawData = fs.readFileSync(dataPath, 'utf8')
        const vehicle = JSON.parse(rawData)
        return vehicle.find(vehicle => vehicle.id === id || null) //posible modificacion
    }
}

module.exports = { vehicleModel };


