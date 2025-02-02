//Registro de tareas pendientes
//1. Agregar una tarea pendiente con su descripcion
//2. Listar tareas
//3. Eliminar una tarea

//PASO 1: IMPORTACION MODULO
const fs = require('fs')
const filePath = './tareas.json'


//Paso 2: Crear y leer archivo
const leerTareas = () => {
    if(!fs.existsSync(filePath)){
        fs.writeFileSync(filePath, '[]')
    }

    const contenido = fs.readFileSync(filePath, 'utf-8')
    return JSON.parse(contenido)
}

//Paso 3; escribir en archivo
const escribirTareas = (tareas) => {
    fs.writeFileSync(filePath, JSON.stringify(tareas, null, 2))
}

//Paso 4: agregar una tarea
const agregarTarea = (nombreTarea, descripcionTarea) => {
    const tareas = leerTareas()
    tareas.push({id: tareas.length + 1, nombre: nombreTarea, descripcion: descripcionTarea})
    escribirTareas(tareas)
    console.log(`Tarea agregada: ${nombreTarea}, ${descripcionTarea}`)
}

//Paso 5: listar tareas
const listarTareas = () => {
    const tareas = leerTareas()
    console.log('Tareas pendientes: ')
    tareas.forEach(tarea => {
        console.log(`${tarea.id}. ${tarea.nombre}. "${tarea.descripcion}"`)
    });
}

//Paso 6: eliminar tarea
const eliminarTarea = (idTarea) => {
    let tareas = leerTareas(); // Leemos las tareas
    tareas = tareas.filter(tarea => tarea.id !== idTarea); // Filtramos para eliminar la tarea por ID
    escribirTareas(tareas); // Guardamos la lista actualizada
    console.log(`Tarea eliminada.`);
};



agregarTarea('Lavar', 'Lavar ropa separada por color')
agregarTarea('Aseo hogar', 'Barrer y trapear toda la casa')
agregarTarea('Compras', 'Falta leche, huevos y pechuga de pavo')
listarTareas()
eliminarTarea(2)