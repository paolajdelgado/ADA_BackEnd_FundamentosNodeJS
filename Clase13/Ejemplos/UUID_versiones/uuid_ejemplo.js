//Paso 1: Improtar las versiones de UUID que vamos a usar
const {v1: uuidv1, v3: uuidv3, v4: uuidv4, v5: uuidv5} = require('uuid');


//Ejemplo 1: UUID V1 - Basado en tiempo
//genera un UUID único basado en la marca del tiempo y la dirección MAC
const idv1 = uuidv1();
console.log('UUID v1 (basado en tiempo): ', idv1);


//Ejemplo 2: UUID V3 - Basado en nombre y espacio nombre (MD5)
//Genera UUID usando un hash MD5
const NAMESPACE = uuidv3.URL; //Espacio de nombres estandar basado en URL
const namev3 = "ejemploPaola";
const idv3 = uuidv3(namev3, NAMESPACE);
console.log("UUID V3 (Basado en nombre y espacio de nombre con MD5): ", idv3);


//Ejemplo 3: UUID V4 - Aleatoria
const idv4 = uuidv4();
console.log("UUID V4 (Aleatoria): ", idv4);


//Ejemplo 5: UUID V5 - Basado en nombre y espacio de nombre (SHA-1)
//Genera UUID usando hash SHA-1
const namev5 = "OtroEjemplo";
const idv5 = uuidv5(namev5, NAMESPACE);
console.log("UUID V5 (Basado en nombre y espacio de nombre con SHA-1): ", idv5);




