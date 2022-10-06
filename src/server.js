import Koa from 'koa';
import koaBody from 'koa-body';
const app = new Koa();
import router from './routes/routes.js';
import {createDatabase} from "./database/faker";


app.use(koaBody());
app.use(router.routes())



app.listen(3000, () => {
    console.log("server is running")
});