const botController = {
  async webhook (ctx) {
    ctx.status = 200
    ctx.body = ''
  }
}
module.exports = botController
