// Ejercicio 1: Sistema de Gestión de Libros        
// Consigna: 
// Vamos a implementar un sistema de gestión de libros donde el cliente 
// pueda solicitar información sobre un libro específico a través de su ID. El 
// servidor procesará la solicitud, buscará el libro en una base de datos 
// simulada (archivo JSON) y devolverá la información al cliente.

const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'data.json');

const bookModel = {
    getBookById: (id) =>{
        const rawData = fs.readFileSync(dataPath);
        const books = JSON.parse(rawData);
        
        return books.find(book => book.id === id || null);
    }
};

module.exports = bookModel;