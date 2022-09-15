const app = require('express')()
const bodyParser= require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const PORT = 3080
app.use(dotenv())
app.use(cors())
app.use(bodyParser())

mongoose.connect("mongodb+srv://obstuong:0616545998@cluster0.wzyutmt.mongodb.net/?retryWrites=true&w=majority").then(()=>{
    console.log(process.env.URL_DB)
})
app.get('/',(req,res)=>{
        res.send('hello')
})
app.listen(PORT,()=>{
    console.log("server is running")
})