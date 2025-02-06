// Ejercicio 3: ¡Sumemos dos números! 
// Consigna: 
// Tu tarea es escribir un programa interactivo que permita al usuario 
// ingresar dos números y calcule su suma. Este ejercicio te ayudará a 
// practicar el uso del módulo readline para leer entradas del usuario en la 
// consola. 
// Requisitos del programa: 
// 1. Usa el módulo readline para crear una interfaz interactiva. 
// 2. Pide al usuario que ingrese dos números, uno a la vez. 
// 3. Calcula y muestra la suma de los dos números. 
// 4. Finaliza el programa con un mensaje de agradecimiento. 
// Indicaciones: 
// 1. Crea un archivo llamado app.js. 
// 2. Usa readline.createInterface para manejar la entrada y salida del 
// usuario. 

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


// 3. Utiliza callbacks para procesar las respuestas del usuario. 
rl.question('Ingresa un numero: ', (num1) =>{
    rl.question('Ingresa otro nnumero: ', (num2) =>{
        const sum = parseFloat(num1) + parseFloat(num2);

        console.log('La suma de los numeros anteriores es: ' + sum);

        rl.close();
    });
});


//Manejar evento cierre para finalizar programa
rl.on('close', ()=>{
    console.log('Gracias por usar el programa');
    process.exit(0);
});

// 4. Ejecuta el programa y prueba ingresando diferentes valores. 