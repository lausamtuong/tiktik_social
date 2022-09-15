const app = require('express')()
const bodyParser= require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const PORT = 3080
dotenv.config()
app.use(cors())
app.use(bodyParser())

console.log(mongodb+srv://obstuong:0616545998@cluster0.wzyutmt.mongodb.net/?retryWrites=true&w=majority)
mongoose.connect("").then(()=>{
})
app.get('/',(req,res)=>{
        res.send('hello')
})
app.listen(PORT,()=>{
    console.log("server is running")
})