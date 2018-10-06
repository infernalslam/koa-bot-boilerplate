require('dotenv').config()
// const axios = require('axios')
const crypto = require('crypto')
const loginServices = {
  async lineLogin () {
    const state = crypto.randomBytes(16).toString('hex')
    // const nonce = crypto.randomBytes(16).toString('hex')
    // ctx.session.state = state
    // https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id={CHANNEL_ID}&redirect_uri={CALLBACK_URL}&state={STATE}&bot_prompt={BOT_PROMPT}&scope={SCOPE_LIST}
    // ctx.redirect(`${process.env.LINE_LOGIN_URL}/oauth2/v2.1/authorize?response_type=code&client_id=${process.env.LINE_CLIENT_ID}&redirect_uri=${process.env.API_BASE_URL}/api/line-callback&state=${state}&scope=openid%20profile&nonce=${nonce}&bot_prompt=normal`)
    console.log(`https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=${process.env.CHANNEL_ID}&redirect_uri=${process.env.CALLBACK_URL}&bot_prompt=${process.env.BOT_PROMPT}&scope=${process.env.SCOPE_LIST}&state=${state}`)
    return (`https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=${process.env.CHANNEL_ID}&redirect_uri=${process.env.CALLBACK_URL}&bot_prompt=${process.env.BOT_PROMPT}&scope=${process.env.SCOPE_LIST}&state=${state}`)
  }
}

module.exports = loginServices