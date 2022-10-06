const {data: books} = require('./books.json');
import fs from 'fs';

export function getAll(){
    return books;
}


/**
 * Get one book by ID
 * @param id id of book want to get
 * @returns {object} book after find in db
 */
export function getOne(id){
    return books.find(book => book.id === parseInt(id));
}

/**
 * create a new book
 * @param book
 */
export function save(book){
    const updatedBooks = [...books, book];
    return fs.writeFileSync('./src/database/books.json', JSON.stringify({
        data: updatedBooks
    }));
}
