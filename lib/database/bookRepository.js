"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAll = getAll;
exports.getOne = getOne;
exports.save = save;

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const {
  data: books
} = require('./books.json');

function getAll() {
  return books;
}
/**
 * Get one book by ID
 * @param id id of book want to get
 * @returns {object} book after find in db
 */


function getOne(id) {
  return books.find(book => book.id === parseInt(id));
}
/**
 * create a new book
 * @param book
 */


function save(book) {
  const updatedBooks = [...books, book];
  return _fs.default.writeFileSync('./src/database/books.json', JSON.stringify({
    data: updatedBooks
  }));
}
//# sourceMappingURL=bookRepository.js.map