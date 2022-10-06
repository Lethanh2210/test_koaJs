import Router from 'koa-router';
import bookRouter from './book.routes.js';

// Prefix all routes with /books
const router = new Router({
    prefix: '/api'
});

// Routes will go here
router.use(bookRouter.routes());

export default router;