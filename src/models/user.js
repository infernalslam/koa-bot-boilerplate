const mongoose = require('mongoose')
const Schema = mongoose.Schema
const schema = new Schema({
  userId: String,
  type: String
})
module.exports = mongoose.model('user', schema)

// { userId: 'U116fbbddbc8cc8df257a280c5aba60eb', type: 'user' }