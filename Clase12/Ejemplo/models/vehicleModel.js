//Paso 1: Importar modulos
const fs = require('fs');
const path = require('path');

//Paso 2: Definir ruta archivo JSON
//__dirname es una variable global que contiene la ruta del directorio actual
const dataPath = path.join(__dirname, 'data.json');

//Paso 3: Creamos objeto que contendra metodos para interactuar con los datos de los vehiculos
const vehicleModel = {
    //Metodo para obtener un vehiculo por ID
    getVehicleById: (id) =>{
        //leermos el archivo json de manera sincrona
        const rawData = fs.readFileSync(dataPath)
        //convertimos el contenido del archivo de JSON a JS
        const vehicles = JSON.parse(rawData);
        //Buscamos vehiculo cuyo id coincida con el que se va a proporcionar
        //si no encuentra ningun vehiculo con ese id, retorna NULL
        return vehicles.find(vehicle => vehicle.id === id || null);
    }
};

//Esxportamos el objeto "vehicleModel" para que pueda ser utilizado en otro archivo
module.exports = vehicleModel;