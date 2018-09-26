const botController = {
  async webhook (ctx) {
    ctx.status = 200
    ctx.body = ctx.response
  }
}
module.exports = botController
