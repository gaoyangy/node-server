const Router = require('koa-router');
const router = new Router();
const controller = require('./controller/index')

router.post('/login', controller.login.index)
router.get('/findPhone', controller.phine.index)
router.get('*', (ctx, next) => {
  ctx.body = {
    error: 1,
    message: '不存在此api',
  }
  next()
})
module.exports = router