const botControllers = require('./bot.controller')

exports.default = {
  controller: botControllers,
  routes: [
    { method: 'GET', url: '/webhook', handler: 'webhook' }
  ]
}
