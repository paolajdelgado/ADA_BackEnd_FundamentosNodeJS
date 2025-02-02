//Importar array
let estudiantes = require('./estudiantes');

//Muestra en consola todos los estudiantes
console.log(estudiantes);

//Calcula y muestra el promedio de notas de un estudiante en especifico



//Agregar un nuevo estudiante al array y muestra el array actualizado en formato JSON
estudiantes.push({nombre:'Karla', edad: 13, curso:'Biologia', notas: [10, 10, 9, 10]});

let jsonString = JSON.stringify(estudiantes);

//Muestra la cadena JSON en la consola
console.log(jsonString);