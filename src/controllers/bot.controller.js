const loginServices = require('../../services/login')
const botController = {
  async webhook (ctx) {
    const koaRequest = ctx.request
    console.log('koaRequest', koaRequest)
    const requestEvents = koaRequest.body.events[0]
    console.log('requestEvents', requestEvents)
    let text = requestEvents.message.text
    // switch (text) {
    //   case 'L' : loginServices.lineLogin(ctx)
    //              break
    // }
    if (text === 'L') {
      ctx.redirect = loginServices.lineLogin(ctx)
      ctx.status = 200
      ctx.body = ''
    }
    ctx.status = 200
    ctx.body = ''
  },
  async lineCallback (ctx) {
    const param = ctx.request.query
    ctx.body = param
  },
  async login (ctx) {
    await loginServices.lineLogin(ctx)
    ctx.body = ''
  }
}
module.exports = botController
