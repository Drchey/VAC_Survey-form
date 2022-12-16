const Profile = require('../models/profile.model')
exports.profile = async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.user.id,
    }).populate('user')

    if (!profile) {
      return res.status(400).json({ msg: 'There is no profile for this user' })
    }

    res.json(profile)
  } catch (error) {
    console.error(error.message)
    res.status(500).json({
      msg: error.message,
    })
  }
}
