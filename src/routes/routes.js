import Router from 'koa-router';
import bookRouter from './book.routes.js';
import fakeDataRouter from "./fakeData.router";

// Prefix all routes with /books
const router = new Router({
    prefix: '/api'
});

// Routes will go here
router.use(bookRouter.routes());
router.use(fakeDataRouter.routes());

export default router;