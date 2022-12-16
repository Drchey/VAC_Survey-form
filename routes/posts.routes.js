const {
  getPosts,
  createPost,
  deletePost,
  getPost,
} = require('../controllers/posts.controller')
const { protect } = require('../middleware/auth.middleware')

const router = require('express').Router()

router.get('/', protect, getPosts)
router.get('/:id', protect, getPost)
router.post('/', createPost)
router.delete('/:id', protect, deletePost)

module.exports = router
