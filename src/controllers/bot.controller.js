const botController = {
  async webhook (ctx) {
    const koaRequest = ctx.request
    console.log('koaRequest', koaRequest)
    const requestEvents = koaRequest.body.events
    console.log('requestEvents', requestEvents)
    ctx.status = 200
    ctx.body = ''
  }
}
module.exports = botController
