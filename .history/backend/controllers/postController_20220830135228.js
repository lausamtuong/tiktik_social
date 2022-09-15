const postSchema = require('../models/post')
var fs = require('fs');
var path = require('path');
const  uploadPost = (req,res)=>{
    var img = fs.readFileSync(req.file.path);
    var encode_image = img.toString('base64');
    var finalImg = {
        contentType: req.file.mimetype,
        image:  fs.readFileSync(path.join(__dirname , '../'+ '/fileUpload/' + req.file.filename))
      };
      postSchema.create(finalImg,(err,item)=>{
        if (err) {
            console.log(err);
        }
        else {
            // item.save();
            res.redirect('/');
        }
      })
  
}

module.exports = {
    uploadPost
}