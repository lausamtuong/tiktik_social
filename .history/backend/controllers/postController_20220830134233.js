const postSchema = require('../models/post')
var fs = require('fs');
const  uploadPost = (req,res)=>{
    var img = fs.readFileSync(req.file.path);
    var encode_image = img.toString('base64');
    var finalImg = {
        contentType: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename))
        image:  img
      };
      res.json(finalImg)
  
}

module.exports = {
    uploadPost
}