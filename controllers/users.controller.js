const User = require('../models/auth.models')

const createUser = async (req, res) => {
  const { name, email } = req.body
  const password = 'pass'

  let user = await User.findOne({ email })
  if (user) {
    return res.status(401).send('User Already Exists')
  }

  user = new User({
    name,
    email,
    password,
  })

  await user.save()
  res.send(user)
}

const changeRole = async (req, res) => {
  const user = await User.findById(req.params.id)
  if (!user) {
    res.status(400)
    throw new Error('User not Found')
  }

  user.isAdmin = !user.isAdmin
  await user.save()
  return res.status(200).json(user)
}

const resetPassword = async (req, res) => {
  const user = await User.findById(req.params.id)
  try {
    if (!user) {
      return res.status(400).send('User Not Found')
    }
    user.password = 'pass'
    await user.save()
    return res.status(200).json(user)
  } catch (error) {
    return res.status(500).json(error.message)
  }
}

const deleteUser = async (req, res) => {
  const user = await User.findById(req.params.id)
  if (!user) {
    return res.status(400).send('User not Found')
  }
  await user.remove()
  return res.status(200).send('Deleted')
}
const fetchUser = async (req, res) => {
  const user = await User.findById(req.params.id)
  return res.status(200).json(user)
}

const fetchUsers = async (req, res) => {
  const users = await User.find({ _id: { $ne: req.user.id } }).select(
    '-password',
  )
  return res.status(200).json(users)
}

module.exports = {
  createUser,
  fetchUsers,
  fetchUser,
  deleteUser,
  resetPassword,
  changeRole,
}
