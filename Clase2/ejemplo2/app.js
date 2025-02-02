const { log } = require('console');
const fs = require('fs');

//Definimos la ruta del archivo json que vamos a manipular
const rutaArchivo = './productos.json'

//Paso 1: Leer archivos JSON
fs.readFile(rutaArchivo, 'utf8',(err, data) => {
    if (err){
        console.error('Erroa al leer el archivo: ', err)
        return // detiene la ejecucion
    }

    //Convertimos el contenido del archivo json (texto) a un objeto javascript utilizando "JSON.parse"
    const productos = JSON.parse(data)
    console.log('Productos actuales: ', productos);

    //Paso 2: Agregar un nuevo producto al listado
    //Creamos un nuevo objeto que representa el nuevo producto
    const nuevoProducto = {
        id: productos.length + 1,
        nombre: 'Webcam',
        precio: 40
    }

    //Agregamos el nuevo producto al array de productos existentes
    productos.push(nuevoProducto)
    console.log('Productos actualizados: ', productos);

    //Paso 3: Escribir al archivo JSON actualizado 
    //convertimos el objeto de JS (productos) nuevamente a texto json uitilizando el otro metodo json.stringify
    const contenidoActualizado = JSON.stringify(productos, null, 2) //El null significa que no deseamos modificar los valores antes de convertirlo a JSON

    //Escribimos el nuevo contenido en el archivo y mostramos el error (en el caso de que haya) por consola
    fs.writeFile(rutaArchivo, contenidoActualizado, (err) => {
        if(err) {
            console.error('Error al escribir en el archivo: ', err)
            return
        }
        console.log('Archivo actualizado correctamente.');
    })

})