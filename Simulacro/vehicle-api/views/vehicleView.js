const vehiculeView = (vehicle) => {
    if(!vehicle) {
        return JSON.stringify({ error: 'Vehiculo no encontrado'});
    }

    return JSON.stringify(vehicle, null, 2);
};

module.exports = {vehiculeView};