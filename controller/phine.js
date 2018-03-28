const api = require('../config/api')
module.exports = new class Phone{
  async index(ctx) {
    ctx.body = {
      aa:"aaaaaaaa"
    };
    return await Promise.resolve()
  }
}()
