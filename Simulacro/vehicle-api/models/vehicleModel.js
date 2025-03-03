const fs = require('fs');
const path = require('path');
const { json } = require('stream/consumers');

const dataPath = path.join(__dirname, '../data/vehicles.json')
//const dataPath = ('../data/vehicles.json')

const vehicleModel ={
    readVehicle : () =>{
        const data = fs.readFileSync(dataPath) //leemos el archivo de forma sincrona
        return JSON.parse(data)
    },

    saveVehicle: (vehicles) =>{
        fs.writeFileSync(dataPath, JSON.stringify(vehicles, null, 2))
    },
}


module.exports = vehicleModel;





// const vehicleModel = {
//     getVehicleID: (id) => {
//         const rawData = fs.readFileSync(dataPath, 'utf8')
//         const vehicle = JSON.parse(rawData)
//         return vehicle.find(vehicle => vehicle.id === id || null) //posible modificacion
//     }
// }

//module.exports = { vehicleModel };


