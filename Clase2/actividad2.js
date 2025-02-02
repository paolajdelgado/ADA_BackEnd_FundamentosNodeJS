let estudiante = {
    nombre: 'Paola',
    edad: 29,
    curso: 'Introducción a NodeJS',
    notas: [10, 9, 8, 9, 6, 10]
};

//Convertir objeto a cadena JSON usando JSON.stringify()
let jsonString = JSON.stringify(estudiante);

//Muestra la cadena JSON en la consola
console.log(jsonString);

//Convertir cadena a objeto con JSON.parse() y mostrarlo en la consola
let objeto = JSON.parse(jsonString);

console.log(objeto);