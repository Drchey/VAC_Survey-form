const jwt = require('jsonwebtoken')
const User = require('../models/auth.models')
const config = require('../config/default.json')

const protect = async (req, res, next) => {
  let token

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    // Check if Authorization Exists in Headers
    token = req.headers.authorization.split(' ')[1]
  }

  if (!token) {
    //if token doesn't exist
    return res.status(401).json({ msg: ' NOt Authorized' })
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    const user = await User.findById(decoded.id)

    if (!user) {
      return res.status(401).json({ msg: ' NOt Authorized 1' })
    }

    req.user = user
    // console.log(req.user)
    next()
  } catch (error) {
    return res.status(401).json({ msg: ' NOt Authorized 2' })
  }
}

module.exports = { protect }
