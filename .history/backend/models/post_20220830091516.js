const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    _type: String,
        caption,
        video: {
          _type: "file",
          asset: {
            _type: "reference",
            _ref: video?._id,
          },
        },
        userId: userProfile?._id,
        postedBy: {
          _type: "postedBy",
          _ref: userProfile?._id,
        },
        topic,
})