const app = require('express')()
const PORT = 3080

app.use(cors())
app.use(bo)
app.listen(PORT,()=>{
    console.log("server is running")
})