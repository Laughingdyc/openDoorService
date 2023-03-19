const Koa = require('koa');
const bodyparser = require('koa-bodyparser')
const json = require('koa-json')

// 创建一个Koa对象表示web app本身:
const app = new Koa();

// routes
const openDoor = require('./routes/openDoor')

// routes
app.use(openDoor.routes(), openDoor.allowedMethods())

// 在端口3000监听:
app.listen(3000);
console.log('app started at port 3000...');