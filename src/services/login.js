require('dotenv').config()
const axios = require('axios')
const crypto = require('crypto')
const querystring = require('querystring')
const jwt = require('jsonwebtoken')
const lineClient = axios.create({
  baseURL: 'https://api.line.me'
})
const loginServices = {
  async lineLogin (ctx) {
    const state = crypto.randomBytes(16).toString('hex')
    const nonce = crypto.randomBytes(16).toString('hex')
    ctx.session.state = state
    ctx.redirect(`https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=${process.env.CHANNEL_ID}&redirect_uri=${process.env.CALLBACK_URL}&bot_prompt=${process.env.BOT_PROMPT}&scope=${process.env.SCOPE_LIST}&state=${state}&nonce=${nonce}`)
  },
  async lineGetAccessToken (param) {
    if (param.error) {
      ctx.throw(401, param.error_description)
    } else if (Object.keys(param).length < 1) {
      ctx.throw(500, 'Some thing went worng')
    }
    try {
      let sendingParam = {
        grant_type: 'authorization_code',
        code: param.code,
        redirect_uri: `${process.env.CALLBACK_URL}`,
        client_id: process.env.CHANNEL_ID,
        client_secret: process.env.CHANNEL_SECRET
      }
      const { data } = await this.checkToken(sendingParam)
      if (data) return data.access_token
      else ctx.throw(500, 'Can not get access token.')
    } catch (e) {
      console.log(e.stack)
      ctx.throw(500, 'Can not get access token.')
    }
  },
  async checkToken (param) {
    return await lineClient.post('/oauth2/v2.1/token', querystring.stringify(param), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
  },
  async lineDecodeWithVerify (token) {
    return jwt.verify(token, process.env.CHANNEL_SECRET, {
      audience: process.env.CHANNEL_ID,
      issuer: 'https://access.line.me',
      algorithms: ['HS256']
    })
  }
}

module.exports = loginServices