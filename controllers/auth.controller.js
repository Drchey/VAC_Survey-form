const User = require('../models/auth.models')
const jwt = require('jsonwebtoken')
const config = require('config')

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body

    // See if User exists
    let user = await User.findOne({ email })

    if (user) {
      return res.status(400).send('User Already Exists')
    } else {
      user = new User({
        name,
        email,
        password,
      })
      await user.save()
      res.status(200).json({ user, token: generateToken(user._id) })
    }
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    })
  }
}

const newUserPassword = async (req, res) => {
  try {
    const user = await User.findById(req.user.id)
    user.password = req.body.password
    user.isDefaultPass = false
    await user.save()
    return res.status(200).json(user)
  } catch (error) {
    return res.status(400).json(error.message)
  }
}

const resetPasswordFromDefault = async (req, res) => {
  try {
    const user = await User.findById('6385a90cb098524b8934bf87')
    // await user.save()
    return res.status(200).json(user)
  } catch (error) {
    return res.status(400).send('')
  }
}

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    if (!user) {
      throw new Error('Invalid Credentials')
    } else {
      const isMatch = await user.matchPasswords(password)
      if (!isMatch) {
        throw new Error('Invalid Credentials')
      } else {
        res.status(200).json({ user, token: generateToken(user._id) })
      }
    }
  } catch (err) {
    return res.status(500).json(err.message)
  }
}

/** JWT Token */
const generateToken = (id) => {
  return jwt.sign(
    {
      id,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '36d',
    },
  )
}
module.exports = {
  registerUser,
  loginUser,
  newUserPassword,
  generateToken,
  resetPasswordFromDefault,
}
