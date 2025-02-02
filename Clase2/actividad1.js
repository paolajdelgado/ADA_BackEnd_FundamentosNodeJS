//Creacion ob jeto JSON
let libro ={
    titulo: 'Mujercitas',
    autor: 'Lousia May Alcott',
    año: '1868',
    genero: 'Novela'
};

//Mostar en consola titulo y autor
console.log('El libro ' + libro.titulo + ' fue escrito por ' + libro.autor);

//Actualizar el año del libro a un valor mas reciente
libro.año = 2025;

//Añadir una nueva propiedad "Paginas"
libro.paginas = 800;

//Mostar objeto en consola
console.log(libro);