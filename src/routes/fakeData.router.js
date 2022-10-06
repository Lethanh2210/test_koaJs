import Router from 'koa-router';
import {createDatabase} from "../database/faker";


// Prefix all routes with /books
const router = new Router({
    prefix: '/fakeData'
});

// Routes will go here
router.get('/', createDatabase);


export default router;