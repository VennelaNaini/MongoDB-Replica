const express = require('express')
const mongoose = require('mongoose')
//const cors=require('cors')
const dataRouter = require('./routes/requireddata')


//const url = 'mongodb://127.0.0.1:27017/Student'
//const url='mongodb://127.0.0.1:27020,127.0.0.1:27021,127.0.0.1:27022/Student?replicaSet=m101';
const url='mongodb+srv://nayinivennela12:<password>@merncrud.brfel.mongodb.net/?retryWrites=true&w=majority&appName=merncrud';
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