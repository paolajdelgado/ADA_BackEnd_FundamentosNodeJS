//Control de inventario
//1. Agregar un producto: nombre y cantidad disponible
//2. Listar productos
//3. actualizar cantidad de productos

//Pas 1: Importacion
const fs = require('fs')
const filePath = './productos.json'

//Paso2: Leer archivo
const leerProductos = () => {
    if(!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, '[]')
    }
    const contenido = fs.readFileSync(filePath, 'utf-8')
    return JSON.parse(contenido)
    
}

//Paso 3: escribir archivo
const escribirProductos = (productos) => {
    fs.writeFileSync(filePath, JSON.stringify(productos, null, 2))
}

//Paso 4: agregar producto
const agregarProducto = (nombreProducto, cantidadDisponible) => {
    const productos = leerProductos()
    productos.push({id: productos.length + 1, nombre: nombreProducto, cantidad: cantidadDisponible})
    escribirProductos(productos)
    console.log(`Producto agregado: ${nombreProducto}. Cantidad disponible: ${cantidadDisponible}`)
}

//Paso 5: Listar productos
const listarProductos = () => {
    const productos = leerProductos()
    console.log('Productos disponibles: ')
    productos.forEach(producto => {
        console.log(producto.id + '. ' + producto.nombre + ', cantidad disponible: ' + producto.cantidad)
    });
}

//Paso 6: Modificar cantidad
const modificarCantidad = (idProducto, nuevaCantidad) => {
    const productos = leerProductos()
    const producto = productos.find(p => p.id === idProducto)
    if(producto) {
        producto.cantidad = parseInt(nuevaCantidad)
        escribirProductos(productos)
        console.log(`Producto ${idProducto} actualizado. Cantidad disponible: ${nuevaCantidad}`)
    } else {
        console.log('Producto no encontrado.')
    }
}

agregarProducto('Teclado', 2)
agregarProducto('Laptop', 1)
agregarProducto('Mouse', 4)
listarProductos()
modificarCantidad(1, 4)
listarProductos()