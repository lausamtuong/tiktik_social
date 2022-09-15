const app = require('express')()
const bodyParser= require('body-parser')
const cors = require('cors')
const PORT = 3080

app.use(cors())
app.use(bodyParser())


app.get('/',(req,res)=>{
        res.send('hello')
})
app.listen(PORT,()=>{
    console.log("server is running")
})