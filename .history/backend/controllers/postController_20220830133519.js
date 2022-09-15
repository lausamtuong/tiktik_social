const postSchema = require('../models/post')
const  uploadPost = (req,res)=>{
    var img = fs.readFileSync(req.file.path);
    var encode_image = img.toString('base64');
    var finalImg = {
        contentType: req.file.mimetype,
        image:  new Buffer(encode_image, 'base64')
      };
      db.collection('quotes').insertOne(finalImg, (err, result) => {
        console.log(result)
    
        if (err) return console.log(err)
    
        console.log('saved to database')
        res.redirect('/')
  
}

module.exports = {
    uploadPost
}