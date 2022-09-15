const router = require('express').Router()
const postController =require('../controllers/')
router.get ('/api/post',postController.uploadPost)

module.exports = router