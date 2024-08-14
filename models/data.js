const mongoose = require('mongoose')


const dataSchema = new mongoose.Schema
({
    Id:
    {
        type:Number,
        required:true
    },
    name: 
    {
        type: String,
        required: true
    },
    Dept: 
    {
        type: String,
        required: true
    },
    email:
    {
        type:String,
        required:true
    },
    placement: 
   {
        type: Boolean,
        required: true,
        default: false
    }

})

module.exports = mongoose.model('Data',dataSchema)
