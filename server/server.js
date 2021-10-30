const PORT = process.env.PORT || 3000

const express = require('express')

const api  = require('./routes/api')
const app = express()

app.use(express.json())

app.use('/api',api)
app.get('/',(req,res) =>{
    res.send("Hello from server")
})

app.listen(PORT,()=>{
    console.log("Server running on localhost:" + PORT)
})