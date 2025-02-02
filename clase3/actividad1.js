//Objetivo: Agregar un libro a la lista de favoritos

//Paso 1: importacion
const fs = require('fs')
const filePath = './libros.json'

//Paso2: funcion para leer libros 
const leerLibros = () => {
    //si el archivo no existe, creamos un archivo vacio con un arreglo
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, '[]')
    }
    const contenido = fs.readFileSync(filePath, 'utf-8') // Leemos el archivo
    return JSON.parse(contenido) // convertir el contenido a un arreglo de libros
}

//Paso 3: funcion para escribir los libros en el archivo JSON
const escribirLibros = (libros) => {
    fs.writeFileSync(filePath, JSON.stringify(libros, null, 2)) //escribirmos los libros en el archivo
}


//Paso 4: agregar un libro
const agregarLibro = (nombreLibro) =>{
    const libros = leerLibros() //leer libros existentes
    libros.push({id: libros.length +1, nombre: nombreLibro}) //agregamos un nuevo libros
    escribirLibros(libros) //guardar la lista actualizada
    console.log('Libro agregado: ' + nombreLibro)
}

//Paso 5:Listar libros
const listarLibros = () => {
    const libros = leerLibros() //leemos libros existentes
    console.log('Lista de libros favoritos: ');
    libros.forEach(libro => {
        console.log(`${libro.id}. ${libro.nombre}`);
    })
}

//Paso 6: hacer un ejemplo de uso llamando a las funciones y colocando directamente aqui los nombres de los archivos
//Sin usar la consola

agregarLibro('El Principito')
agregarLibro('Mujercitas')
agregarLibro('El caballero de la armadura oxidada')
listarLibros()