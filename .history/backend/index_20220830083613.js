const app = require('express')()
const bodyParser= require('body-parser')
const PORT = 3080

app.use(cors())
app.use()
app.listen(PORT,()=>{
    console.log("server is running")
})