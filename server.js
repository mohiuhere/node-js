const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config()
const app = express()
const indexRouter = require('./router/index')
const connectDB = require('./db/connection')


app.use(bodyParser.json())

app.use('/', indexRouter)


const port = process.env.port || 8080


// Server only start whene db is connected to server
const start = async function(){
    try{
        await connectDB(process.env.DATABASE_URL)
        app.listen(port, console.log(`Server is running on ${port}...`))
    }catch(err){
        console.error(err)
    }
}

start()

// End==> Server only start whene db is connected to server


