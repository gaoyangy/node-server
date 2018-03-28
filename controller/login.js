const User = require('../model/user')
module.exports = new class Login {
  async index(ctx) {
    const result = await User.findOne(ctx.request.body)
    if (result.length === 0) {
      ctx.session.isNew = false
      return ctx.body = {
        code: 1,
        message: '用户名不存在'
      }
    }
    if (result[0].password === ctx.request.body.password) {
      ctx.session.isNew = true
      return ctx.body = {
        code: 0,
        message: '登陆成功'
      }
    } else {
      ctx.session.isNew = false
      ctx.body = {
        code: 1,
        message: '密码错误'
      }
    }
  }
}()