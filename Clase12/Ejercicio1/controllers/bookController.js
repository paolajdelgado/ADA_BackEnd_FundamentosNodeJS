const bookModel = require('../models/bookModel');
const bookView = require('../views/bookView');

const bookController = {
    handleRequest: (id) => {
        const book = bookModel.getBookById(parseInt(id, 10))
        return bookView.formatResponse(book);
    }
};

module.exports = bookController;