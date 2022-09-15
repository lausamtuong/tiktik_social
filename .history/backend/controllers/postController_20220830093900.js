const postSchema = require('../models/post')
const  uploadPost = (req,res)=>{
    const postDetails = req.body
    const newPost = new postSchema(postDetails)
    newpo
}

module.exports = {
    uploadPost
}