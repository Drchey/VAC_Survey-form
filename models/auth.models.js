const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const userSchema = mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
    unique: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  isDefaultPass: {
    type: Boolean,
    default: true,
  },

  password: {
    type: String,
    required: true,
    min: 6,
  },
})

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next()
  }
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
  next()
})

userSchema.methods.matchPasswords = async function (password) {
  const result = await bcrypt.compare(password, this.password)
  return result
}

userSchema.changePassword = async function (password) {
  this.password = password
  return true
}

userSchema.methods.getSignedToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: '1h',
  })
}

module.exports = User = mongoose.model('User', userSchema)
