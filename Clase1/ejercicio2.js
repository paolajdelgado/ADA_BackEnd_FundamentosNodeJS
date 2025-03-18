// Ejercicio 2: El menú del día 🍽️ 
// Escribe una función que reciba un objeto con platos y precios, y devuelva 
// los platos cuyo precio sea menor a $20. 
// Consigna: 
// • Usa un bucle for...in. 
// • Usa objetos y arrays.

let menu = {
    "Ensalada": 15,
    "Sopa": 8,
    "Carne": 25,
    "Pasta": 18
};

function platosBaratos(input){
    let baratos = [];
    for(let plato in input){
        if(input[plato] < 20){
            baratos.push(plato)
        }
    }
    return baratos;
}

console.log(platosBaratos(menu)); //Debe devolver ["Ensalada", "Sopa", "Pasta"]