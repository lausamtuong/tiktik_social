const router = require('express').Router()

router.get ('/api/post',postController.uploadPost)

module.exports = router