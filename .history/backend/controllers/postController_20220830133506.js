const postSchema = require('../models/post')
const  uploadPost = (req,res)=>{
    var img = fs.readFileSync(req.file.path);
    var encode_image = img.toString('base64');
  
}

module.exports = {
    uploadPost
}