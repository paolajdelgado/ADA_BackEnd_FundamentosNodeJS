// Ejercicio 1: ¡Crea tu perfil digital!        
// Consigna: 
// Imagina que acabas de unirte a una red social donde puedes crear tu 
// perfil digital básico. Tu misión es: 
// 1. Crear un archivo llamado perfil.json.  
// 2. Dentro de este archivo, guarda información sobre ti: nombre, edad 
// y tu ciudad favorita. 
const perfil = {
    nombre: "Paola",
    edad: 25,
    ciudadFavorita: "Seattle"
};

// 3. Usa el módulo fs para escribir este archivo desde Node.js. 
// Pista: Utiliza JSON.stringify para convertir tu información en un 
// formato que pueda guardarse en el archivo. 
const fs = require('fs');

const perfilDigital= JSON.stringify(perfil, null, 2);

fs.writeFileSync('perfil.json', perfilDigital);
