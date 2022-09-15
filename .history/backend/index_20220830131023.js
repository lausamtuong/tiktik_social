const app = require('express')()
const bodyParser= require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const post = require('./router/post.js')
const PORT = 3080
dotenv.config()
app.use(cors())
app.use(bodyParser.json())


mongoose.connect(process.env.URL_DB).then(()=>{
    console.log(1)
})
app.use('/',post)
app.listen(PORT,()=>{
    console.log("server is running")
})