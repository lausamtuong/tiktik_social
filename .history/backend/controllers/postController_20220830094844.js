const postSchema = require('../models/post')
const  uploadPost = (req,res)=>{
    // const postDetails = req.body
    // const newPost = new postSchema(postDetails)
    // newPost.save().then(()=>{console.log('save Success')})
    console.log(req)
}

module.exports = {
    uploadPost
}