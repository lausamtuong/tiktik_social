const app = require('express')()
const PORT = 3080

app.use(cors())
app.listen(PORT,()=>{
    console.log("server is running")
})