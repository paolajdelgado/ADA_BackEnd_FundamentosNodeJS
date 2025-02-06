//Ejemplo clase: Aplicación básica para saludar al usuario y conocer su edad

//Consignas:
//Escribe programa que:
//1. Escriba nombre usuario desde linea de comandos
//a). importar libreria readline
const { read } = require('fs');
const readline = require('readline');

//b). cargamos las variables de entorno desde el archivo .env (creado recientemente) usando esta libreria 'dotenv'
require('dotenv').config()

//c). Establecemos un saludo predeterminado usando una variable de entorno
    // Generamos el archivo .env en la carpeta para colocar información SECRETA, en este caso, el saludo predeterminado
    //si no se define en el archivo .env, usamos este valor por defecto (Hola sin mas)
const defaultGreeting = process.env.GREETING || 'Hola!';


//d). Procesamos los argumentos de la linea de comando (process.argv)
    //Capturamos el primer argumento despues del nombre del archivo como el nombre de usuario
const args = process.argv.slice(2)

    //Si no se proporciona un argumento, usamos 'Invitado' como valor predeterminado
const userName = args[0] || 'Chicas de Back'


//e). Mostramos un saludo personalizado y el nombre del usuario
console.log(`${defaultGreeting}, ${userName}`);


//2. mostrar info sobre el entorno de ejecucion
console.log('Información sobre el entorno de ejecución: ');
//directorio actual
console.log(`Directorio actual: ${process.cwd()}`);
//plataforma
console.log(`Plataforma: ${process.platform}`);


//3. Creacion de la interfaz para interactuar con el usuario
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

//Metodo rl question para mostrar la pregunta al usuario 
rl.question('¿Cuantos anios tienes? ', (age) =>{
    console.log(`Wow, ${age} es una gran edad`);
    rl.close();
});

//Manejar evento de close (opcional)
rl.on('close', () =>{
    console.log('Gracias por usar este programa. Adios!');
    //Para cerrar bien el proceso y evitar el error
    process.exit(0);
});



