const Koa = require('koa');
const app = new Koa();
const router = require('./router');
const bodyParser = require('koa-bodyParser');
const mysql = require('mysql2');
const session = require('koa-session')
const logger = require('koa-logger')

const sessionConfig = require('./config/session')
const passport = require('koa-passport')

app.use(logger())
app.use(passport.initialize())
app.use(passport.session())
app.keys = ['some secret hurr'];
app.use(bodyParser())
app.use(session(sessionConfig, app));
app.use(async (ctx, next) => {
  console.log(ctx.session)
  if (!ctx.session.isNew) {
    ctx.body = {
      message: '请登陆'
    }
  } else {
    await next();
  }
});

app.use(router.routes())

app.listen(3000, ()=> {
  console.log('启动了一个node,3000端口')
})