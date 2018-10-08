const userSchema = require('../models/user')
const user = {
  async save (userData) {
    const user = new userSchema(userData)
    return await user.save()
  }
}

module.exports = user
