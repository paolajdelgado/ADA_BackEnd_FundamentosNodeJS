//Paso 3: Crear un objeto que contendrá los métodos para formatear respuestas relacionadas con vehiculos
const vehicleView = {
    //metodo para formatear la respuesta que se enviara al usuario
    formatResponse: (vehicle) => {
        //verificamos si el vehiculo es null o undefined (es decir, que no se encuentra)
        if(!vehicle) {
            //si no se encontro el vehiculo, devolvemos un objeto json con un mensaje de error
            return JSON.stringify({
                status: 'error',
                message: 'Vehiculo no encontrado'
            })
        }

        //si se encontro el vehiculo, devolvemos un objeto JSON con los datos del vehiculo
        return JSON.stringify({
            status: 'success',
            message: vehicle
        })
    }
}

module.exports = vehicleView;