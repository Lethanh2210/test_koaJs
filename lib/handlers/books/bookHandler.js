"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBook = getBook;
exports.getBooks = getBooks;
exports.save = save;

var _bookRepository = require("../../database/bookRepository.js");

/**
 *
 * @param ctx
 * @returns {Promise<void>}
 */
async function getBooks(ctx) {
  try {
    const books = (0, _bookRepository.getAll)();
    ctx.body = {
      data: books
    };
  } catch (e) {
    ctx.status = 404;
    ctx.body = {
      success: false,
      data: [],
      error: e.message
    };
  }
}
/**
 *
 * @param ctx
 * @returns {Promise<{data: {author: string, name: string, id: number}}|{success: boolean, error: *}|{message: string, status: string}>}
 */


async function getBook(ctx) {
  try {
    const {
      id
    } = ctx.params;
    const getCurrentBook = (0, _bookRepository.getOne)(id);

    if (getCurrentBook) {
      return ctx.body = {
        data: getCurrentBook
      };
    }

    ctx.status = 404;
    return ctx.body = {
      status: 'error!',
      message: 'Book Not Found with that id!'
    };
  } catch (e) {
    return ctx.body = {
      success: false,
      error: e.message
    };
  }
}
/**
 *
 * @param ctx
 * @returns {Promise<{success: boolean, error: *}|{success: boolean}>}
 */


async function save(ctx) {
  try {
    const postData = ctx.request.body;
    (0, _bookRepository.save)(postData);
    ctx.status = 201;
    return ctx.body = {
      success: true
    };
  } catch (e) {
    return ctx.body = {
      success: false,
      error: e.message
    };
  }
}
//# sourceMappingURL=bookHandler.js.map