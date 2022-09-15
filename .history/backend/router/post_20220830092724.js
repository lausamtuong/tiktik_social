const router = require('express').Router()
const postController =require('../')
router.get ('/api/post',postController.uploadPost)

module.exports = router