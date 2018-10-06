const botControllers = require('./bot.controller')

exports.default = {
  controller: botControllers,
  routes: [
    { method: 'POST', url: '/webhook', handler: 'webhook' },
    { method: 'GET', url: '/login', handler: 'login' },
    { method: 'GET', url: '/line-callback', handler: 'lineCallback' }
  ]
}
