const userServices = require('../services/user')
const loginServices = require('../services/login')
const botController = {
  async webhook (ctx) {
    const koaRequest = ctx.request
    console.log('koaRequest', koaRequest)
    const requestEvents = koaRequest.body.events[0]
    console.log('requestEvents', requestEvents)
    let text = requestEvents.message.text
    if (text === 'ค้นหา') {
      await userServices.save(requestEvents.source) // require userId for LINE userId
    }
    ctx.status = 200
    ctx.body = ''
  },
  async lineCallback (ctx) {
    const param = ctx.request.query
    let lineToken = await loginServices.lineGetAccessToken(param)
    // ctx.redirect(process.env.FRONTEND_URL + '/setting?token=' + lineToken)
    ctx.redirect(process.env.TEST_FRONTEND_URL + '/setting?token=' + lineToken)
  },
  async login (ctx) {
    await loginServices.lineLogin(ctx)
    ctx.body = ''
  }
}
module.exports = botController
