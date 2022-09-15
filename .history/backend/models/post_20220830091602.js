const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    _type: String,
    caption:String,
    video: {
          _type: String,
          asset: {
            _type:String,
            _ref: String,
          },
        },
        userId: String,
        postedBy: {
          _type: String,
          _ref: String,
        },
        topic:String,
})