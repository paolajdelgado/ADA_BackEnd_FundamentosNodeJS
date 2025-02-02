//Gestion de un diario personal
//1. Agregar una entrada al diario: Registrar una nueva entrada con fecha y texto
//2. Listar las entradas
//3. Eliminar una entrada

//Paso 1: Importacion
const { AsyncLocalStorage } = require('async_hooks')
const fs = require('fs')
const filePath = './diario.json'

//Paso2: Leer archivo
const leerArchivo = () => {
    if(!fs.existsSync(filePath)){
        fs.writeFileSync(filePath, '[]')
    }

    const contenido = fs.readFileSync(filePath, 'utf-8')
    return JSON.parse(contenido)
}

//Paso 3: Escribir en archivo
const escribirEntradas = (entradas) => {
    fs.writeFileSync(filePath, JSON.stringify(entradas, null, 2))
}

//Paso 4: Agregar una entrada al diario
const agregarEntrada = (fechaEntrada, textoEntrada) => {
    const entradas = leerArchivo()
    entradas.push({id: entradas.length +1, fecha: fechaEntrada, texto: textoEntrada})
    escribirEntradas(entradas)
    console.log('Entrada agregada: ' + textoEntrada)
}

//Paso 5: Listar entradas
const listarEntradas = () => {
    const entradas = leerArchivo()
    console.log('Lista de entradas archivadas: ')
    entradas.forEach(entrada => {
        console.log(`${entrada.id}. Fecha: ${entrada.fecha}. Descripción: ${entrada.texto}`)        
    });
}

//Paso 6: Eliminar una entrada
const eliminarEntrada = (idEntrada) => {
    let entradas = leerArchivo()
    entradas = entradas.filter(entrada => entrada.id !== idEntrada)
    escribirEntradas(entradas)
    console.log('Entrada eliminada.')
}

//Aplicacion:
agregarEntrada('07-enero-25', 'Hoy iniciamos el curso de BackEnd')
agregarEntrada('14-enero-25', 'Hoy iniciamos la tuvimos la primera práctica con el modulo fs')
agregarEntrada('02-febrero-25', 'Me pusé al corriente con los clases de manera asincrónica')
listarEntradas()
eliminarEntrada(1)
listarEntradas()