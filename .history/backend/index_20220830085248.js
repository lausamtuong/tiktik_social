const app = require('express')()
const bodyParser= require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const PORT = 3080

app.use(cors())
app.use(bodyParser())

moong
app.get('/',(req,res)=>{
        res.send('hello')
})
app.listen(PORT,()=>{
    console.log("server is running")
})