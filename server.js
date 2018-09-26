require('dotenv').config()
const Koa = require('koa')
const cors = require('kcors')
const koaBody = require('koa-body')
const router = require('./src/controllers')

const app = new Koa()
app.use(koaBody({
  formLimit: '5mb',
  multipart: true
}))
app.use(router.routes())

const env = process.env.NODE_ENV || 'local'
const port = process.env.PORT || 8005
app.listen(port)
console.log('*Environment: ', env)
console.log('Server is listening @ port ' + port)

exports.default = app
