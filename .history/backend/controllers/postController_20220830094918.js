const postSchema = require('../models/post')
const  uploadPost = (req,res)=>{
    // const postDetails = req.body
    // const newPost = new postSchema(postDetails)
    // newPost.save().then(()=>{console.log('save Success')})
  res.status(200).json(req)
}

module.exports = {
    uploadPost
}