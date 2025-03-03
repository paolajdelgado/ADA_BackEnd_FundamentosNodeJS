const bookView = {
    formatResponse: (book) =>{
        if(!book) {
            return JSON.stringify({
                status: 'error',
                message: 'Libro no encontrado'
            })
        }

        return JSON.stringify({
            status: 'succes',
            message: book
        })
    }
}

module.exports = bookView;