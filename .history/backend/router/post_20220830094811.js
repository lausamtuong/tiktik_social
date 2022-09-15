const router = require('express').Router()
const postController =require('../controllers/postController')
router.post('/api/post',()postController.uploadPost)

module.exports = router