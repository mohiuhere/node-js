const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const indexRouter = require('./router/index')



app.use(bodyParser.json())

app.use('/', indexRouter)



const port = process.env.port || 8080
app.listen(port, console.log(`Server is running on ${port}...`))