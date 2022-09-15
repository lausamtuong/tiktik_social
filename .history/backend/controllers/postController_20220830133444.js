const postSchema = require('../models/post')
const  uploadPost = (req,res)=>{
    var img = fs.readFileSync(req.file.path);
  
}

module.exports = {
    uploadPost
}