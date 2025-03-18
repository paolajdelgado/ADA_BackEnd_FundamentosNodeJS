// Ejercicio 1: ¿Quién puede entrar al parque?       
// Tienes un parque de diversiones que permite la entrada a personas 
// mayores de 12 años y menores de 60. Escribe una función que reciba una 
// lista de edades y devuelva cuántas personas pueden entrar al parque. 
// Consigna: 
// • Usa un bucle for y condicionales. 
// • Usa un array como entrada de la función. 
// • Devuelve el número de personas que cumplen con los requisitos. 

//a) Funcion que reciba una lista de edades
let edades = [10, 15, 35, 65, 12, 59];

//Cuantas personas pueden entrar al parque?
function personasQuePuedenEntrar(input) {
    let admitidos=0;
    for(let i = 0; i < input.length; i++){
        if(input[i] >= 12 && input[i] <= 60){
            admitidos += 1;
        }
    } 
    return admitidos;
}

console.log(personasQuePuedenEntrar(edades)); //debe devolver 4

