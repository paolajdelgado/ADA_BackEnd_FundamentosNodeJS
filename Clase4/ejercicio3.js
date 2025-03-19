// Ejercicio 3: ¡Actualiza tu estilo!     
// Consigna: 
// ¿Has cambiado tu estilo o actividad reciente? ¡Es momento de actualizar 
// tu perfil! Agrega un nuevo atributo hobby a tu perfil y guarda los cambios 
// en el archivo perfil.json. 
// Pista: Primero, lee el archivo existente, actualiza el objeto y vuelve a 
// escribirlo.

const fs = require('fs');

let data = fs.readFileSync('perfil.json', 'utf-8');

let perfil = JSON.parse(data);
perfil.hobby = 'Dibujar';

let actualizacion = JSON.stringify(perfil, null, 2);
//let perfilActualizado = fs.writeFile('perfil.json', actualizacion);


// Escribir el archivo perfil.json de manera asíncrona
fs.writeFile('perfil.json', actualizacion, (err) => {
    if (err) {
        console.error("Error al escribir el archivo:", err);
    } else {
        console.log("¡Perfil actualizado exitosamente!");
    }
});
