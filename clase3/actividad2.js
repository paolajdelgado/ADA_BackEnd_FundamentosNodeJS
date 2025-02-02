//seguimiento de series de television
//Consigna: Organizar tus series favoritas. Crear programa que permita:
//1. Registrar una serie (nombre y cantidad de temporadas)
//2. Listar las series
//3. Actualizar las temporadas de una serie


//Paso 1: Importar 
const fs = require('fs')
const filePath = './series.json'

//Paso 2: Leer archivo 'series'
const leerSeries = () => {
    //si el archivo no existe, creamos un archivo vacio con un arreglo
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, '[]')
    }
    const contenido = fs.readFileSync(filePath, 'utf-8') // Leemos el archivo
    return JSON.parse(contenido) // convertir el contenido a un arreglo de libros
}

//Paso 3: escribir en archivo
const escribirSeries = (series) => {
    fs.writeFileSync(filePath, JSON.stringify(series, null, 2))
}

//Paso 4: agregar una serie 
const agregarSerie = (nombreSerie, temporadasSerie) =>{
    const series = leerSeries()
    series.push({id: series.length +1, nombre: nombreSerie, temporadas: temporadasSerie})
    escribirSeries(series)
    console.log('Serie agregada: ' + nombreSerie)
}

//Paso 5: Listar
const listarSeries = () => {
    const series = leerSeries()
    console.log('Lista de series favoritas: ');
    series.forEach (series => {
        console.log(`${series.id}. ${series.nombre} (${series.temporadas} temporadas)`);
    })
}

//Paso 6. Actualizar temporadas de una serie 
const actualizarSeries = (idSerie, temporadasActualizar) => {
    const series = leerSeries()
    const serie = series.find(s => s.id === idSerie);
    if(serie) {
        serie.temporadas = parseInt(temporadasActualizar);
        escribirSeries(series);
        console.log(`Serie actualizada: ${serie.nombre}, nuevas temporadas: ${serie.temporadas}`)
    } else {
        console.log("Serie no encontrada")
    }
};

agregarSerie('Severance', 1)
agregarSerie('The good place', 4)
agregarSerie('Community', 6)
agregarSerie('Friends', 9)
listarSeries()
actualizarSeries(1, 2)
listarSeries()