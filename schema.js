const mongoose = require("mongoose");
const schema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    price:{
        type:Number,
        required:true

    }
})

const user = mongoose.model("rohitha",schema);
module.exports = user;