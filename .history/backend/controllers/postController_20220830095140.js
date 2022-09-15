const postSchema = require('../models/post')
const  uploadPost = (req,res)=>{
    const postDetails = req.body
    const newPost = new postSchema(postDetails)
    newPost.save().then(()=>{res.status(200).json(req.body)})
  
}

module.exports = {
    uploadPost
}