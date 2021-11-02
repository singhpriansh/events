const express = require('express')
const cors = require('cors')

const api  = require('./routes/api')
const app = express()

const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

app.use('/api',api)
app.get('/',(req,res) =>{
    res.send("Hello from server")
})

app.listen(PORT,()=>{
    console.log("Server running on localhost:" + PORT)
})