const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name : {
        type : String,
        require : [true, "Name Is Required"]
    },
    email : {
        type : String,
        require : [true, "email Is Required"]
    },
    password : {
        type : String,
        require : [true, "password Is Required"]
    },
    mobile : {
        type : String,
        min : [10, "Min 10 Digit number is required"],
        max : [10, "max 10 Digit number is required"]
    },
    active : {
        type : Boolean,
        default : true
    },
    address : {
        house : String,
        street : String,
        city : String,
        pin : String,
    },
    profile : String
}, {timestamps : true})

module.exports = mongoose.model("user", userSchema)