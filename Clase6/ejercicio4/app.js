// Ejercicio 4: Mensaje de despedida personalizado 
// Consigna: 
// Crea un programa interactivo que pregunte al usuario su nombre y lo 
// use en un mensaje de despedida. Usa variables de entorno para 
// personalizar el saludo inicial. 
// Requisitos del programa: 
// 1. Usa una variable de entorno llamada START_MESSAGE para 
// configurar el saludo inicial. 
const { read } = require('fs');
const readline = require('readline');
require('dotenv').config;

const defaultGreeting = process.env.START_MESSAGE || 'Hola!'

console.log(defaultGreeting);

//2. Usa readline para preguntar el nombre del usuario. 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('¿Cuál es tu nombre? ', (name) =>{
    console.log(`Mucho gusto ${name}.`)
    rl.close();
});

// 3. Despídete del usuario con un mensaje personalizado.
rl.on('close', ()=>{
    console.log('Hasta luego, gracias por usar el programa.');
    process.exit(0);
});