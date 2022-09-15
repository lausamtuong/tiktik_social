const router = require('express').Router()
const postController =require('../controllers/postController')
const multer = require('multer');
router.post('/api/post',postController.uploadPost)

module.exports = router