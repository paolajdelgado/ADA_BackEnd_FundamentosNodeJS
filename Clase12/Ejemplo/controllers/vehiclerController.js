//Proposito del archivo:
//Recibe las peticiones del cliente, 
// Llama al modelo para obtener los datos (en este caso, de los vehiculos)
//Los pasa primero a la vista para que los formatee y los muestre al cliente

//Paso 4: Importar modulo elaborado en el archivo de modelo
const vehicleModel = require('../models/vehicleModel');

//Paso 5: Importar el modulo de la vista 
//Este modulo contiene la logica para formatear la respuesta que se enviará al usuario
const vehicleView = require('../views/vehicleView');

//Paso 6: Creamos un objeto que manejara las solicitudes relacionadas con vehicles
const vehicleController = {
    //metodo para manejar solicitudes de vehiculos por id
    handleRequest: (id) =>{
        //lamamos al metodo getVehicleById del modelo para obtener los datos del vehiculo
        //convertimos el id a un numero entero usando parse in (base 10)
        const vehicle = vehicleModel.getVehicleById(parseInt(id,10));

        //llamamos al metodo formatResponse del view
        //este metodo toma los datos del vehiculo y los prepara para ser enviados al usuario
        return vehicleView.formatResponse(vehicle);
    }
};

module.exports = vehicleController;