const {
  registerUser,
  loginUser,
  resetPasswordFromDefault,
  newUserPassword,
} = require('../controllers/auth.controller')
const { protect } = require('../middleware/auth.middleware')

const router = require('express').Router()

router.post('/', registerUser)
router.post('/password_secure', protect, newUserPassword)
router.put('/:id', resetPasswordFromDefault)
router.post('/login', loginUser)
module.exports = router
