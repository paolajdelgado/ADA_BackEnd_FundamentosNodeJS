const path = require('path');

//Ejemplo 1 :Uniendo rutas distintas
const ejemplo1 = path.join('/user', 'local', 'bin');
console.log('Ejemplo 1 - Ruta combinada: ', ejemplo1);


//Ejemplo 2: Eliminar arras redundantes
const ejemplo2 = path.join('/user/', '/local/', 'bin/');
console.log('Ejemplo 2 - Rutas normalizadas sin barras redundantes: ', ejemplo2);


//Ejemplo 3: Normalizamos rutas con ".."
//Es decir, subir de directorio (regresar en carpeta)
const ejemplo3 = path.join('/user', 'local', '..', 'bin');
console.log('Ejemplo 3 - Rutas normalizadas con "..": ', ejemplo3);

//Ejemplo 4: Construccion ruta relativa multiplataforma
//Creamos una ruta relativa que funcione en cualquier sistema operativo
const ejemplo4 = path.join('docs', 'projects', 'index.html');
console.log('Ejemplo 4 - Rutas relativas: ', ejemplo4);