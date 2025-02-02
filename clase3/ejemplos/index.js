// CONSIGNA:
// Vamos a crear una aplicación básica en Node.js para gestionar una lista de tareas.
// Usaremos módulos nativos como 'fs' y trabajaremos con JSON para almacenar nuestras tareas.
// El objetivo es que aprendan a leer y escribir en archivos, usar rutas relativas y absolutas,
// y trabajar con datos JSON en Node.js.

//Pasos  a seguir:
//1. Inicializar un proyecto con npmm init 
//2. Crear un archivo 'tareas.json' para almacenar las tareas
//3. Desarrolllar un script que permita:
//      -Listar tareas
//      -Agregar una nueva tarea


const { log } = require('console')
const fs = require('fs') //Para usar librerira fs es necesario hacerlo variable hasta arriba del archivo

const filePath = './tareas.json'

//leemos los argumentos pasados desde la linea de comandos
const args = process.argv.slice(2)
const comando = args[0] //primer argumento: el comando a ejecutar
const descripcion = args.slice(1).join(' ') // el resto de los argumentos: la descripcion de la tarea

//Funcion para leer el archivo json y devolver las tareas
const leerTareas = () => {
    const contenido = fs.readFileSync(filePath, 'utf-8') //Leer archivo json
    return JSON.parse(contenido) //Convertir el contenido JSON en un array de tareas
}

//Funcion para escribir tareas en el json
const escribirTareas = (tareas) => {
    const json = JSON.stringify(tareas, null, 2) //convertir array de tareas en formato JSON
    fs.writeFileSync(filePath, json, 'utf-8') //Guarde el json en el archivo
}

//Funcion para agregar una tarea nueva
const agregarTarea = (descripcion) => {
    const tareas = leerTareas() //Leer las tareas actuales
    tareas.push({id: tareas.length + 1, descripcion, completada: false}) //Agregar una nueva tarea
    escribirTareas(tareas) //guardar las tareas actualizadas
    console.log('Tarea agregada: ', descripcion);
}

//Funcion para listar todas las tareas
const listarTareas = () => {
    const tareas = leerTareas(); //Leer las tareas actuales
    console.log('Lista de tareas: ');
    tareas.forEach(tarea => {
        const estado = tarea.completada ? 'Si' : 'No'; //Mostrar la tarea esta completada o no
        console.log(`${tarea.id}. ${tarea.descripcion} - ${estado}`);
    });
};

//Funcion para marcar una tarea como completada
const completarTarea = (id) => {
    const tareas = leerTareas() //Leer las tareas actuales
    const tarea = tareas.find((t) => t.id === parseInt(id)) //Buscar tarea por ID
    if(tarea) {
        tarea.completada = true //marcar la tarea como completada
        escribirTareas(tarea) //guardar las tareas actualizadas
        console.log('Tarea completada: ', tarea.descripcion);
    } else {
        console.log('Tarea no encontrada');
    }
}

//Manejo de los comandos
if (comando === 'agregar') {
    agregarTarea(descripcion)
} else if (comando === 'listar') {
    listarTareas()
} else if (comando === 'completar'){
    completarTarea(descripcion)
} else {
    console.log('Comando no reconocido. Usa "agregar, listar o completar"');
}