require('dotenv').config()
const Koa = require('koa')
const cors = require('kcors')
const koaBody = require('koa-body')
const router = require('./src/controllers')
const mongoose = require('mongoose')
const session = require('koa-session')

mongoose.connect('mongodb://localhost:27017/local', { useNewUrlParser: true })

const app = new Koa()
app.use(cors())
app.use(koaBody({
  formLimit: '5mb',
  multipart: true
}))
app.use(router.routes())

app.use(session({
  keys: 'liness',
  maxAge: 3600000,
  overwrite: true,
  httpOnly: false,
  signed: true
}, app))

const env = process.env.NODE_ENV || 'local'
const port = process.env.PORT || 8005
app.listen(port)
console.log('*Environment: ', env)
console.log('Server is listening @ port ' + port)

exports.default = app
