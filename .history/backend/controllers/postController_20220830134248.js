const postSchema = require('../models/post')
var fs = require('fs');
const  uploadPost = (req,res)=>{
    var img = fs.readFileSync(req.file.path);
    var encode_image = img.toString('base64');
    var finalImg = {
        contentType: req.file.mimetype,
        image:  fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename))
      };
      res.json(finalImg)
  
}

module.exports = {
    uploadPost
}