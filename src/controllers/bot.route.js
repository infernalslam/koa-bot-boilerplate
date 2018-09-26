const botControllers = require('./bot.controller')

exports.default = {
  controller: botControllers,
  routes: [
    { method: 'POST', url: '/webhook', handler: 'webhook' }
  ]
}
