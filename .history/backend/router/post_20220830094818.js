const router = require('express').Router()
const postController =require('../controllers/postController')
router.post('/api/post',(req,res)=>postController.uploadPost)

module.exports = router