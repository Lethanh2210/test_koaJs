import Router from 'koa-router';
import * as bookHandler from '../handlers/books/bookHandler.js';
import bookInputMiddleware from '../middleware/bookInputMiddleware.js';

// Prefix all routes with /books
const router = new Router({
    prefix: '/books'
});

// Routes will go here
router.get('/', bookHandler.getBooks);
router.get('/:id', bookHandler.getBook);
router.post('/', bookInputMiddleware, bookHandler.save);

export default router;