const express = require('express')
const mongoose = require('mongoose')
//const cors=require('cors')
const dataRouter = require('./routes/requireddata')


const url = 'mongodb://127.0.0.1:27017/Student'
const app = express()
mongoose.connect(url)
const con = mongoose.connection


con.on('open', () =>
{
console.log('connected...')
})
//app.use(cors())
app.use(express.json())

app.use('/requireddata',dataRouter)
app.listen(9000, () =>
{
console.log('Server started')
})