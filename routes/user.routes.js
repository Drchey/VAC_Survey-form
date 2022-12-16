const { profile } = require('../controllers/profile.controller')
const {
  createUser,
  fetchUsers,
  changeRole,
  deleteUser,
} = require('../controllers/users.controller')
const { protect } = require('../middleware/auth.middleware')

const router = require('express').Router()

router.get('/', protect, fetchUsers)
router.post('/', protect, createUser)
// router.get('/:id', protect, fetchUser)
router.put('/:id', changeRole)
router.get('/me', protect, profile)
// router.put('/reset/:id', resetPassword)
router.delete('/:id', deleteUser)

module.exports = router
