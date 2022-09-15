const app = require('express')()
const bodyParser= require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const post = require('./router/post.js')
const PORT = 3080
dotenv.config()
app.use(cors())
app.use(bodyParser())


mongoose.connect(process.env.URL_DB).then(()=>{
    console.log(1)
})
app.get('/',(req,res)=>{
        res.send('hello')
})
app.listen(PORT,()=>{
    console.log("server is running")
})