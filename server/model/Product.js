const mongoose = require("mongoose")
const productSchema = mongoose.Schema({
    name : {
        type: String,
        require : [true, "Product Name is required"]
    },
    stock : {
        type: String,
        require : [true, "Product stock is required"]
    },
    price : {
        type: String,
        require : [true, "Product price is required"]
    },
    images : {
        type: String,
        require : [true, "Product images is required"]
    },
    publish : {
        type: Boolean,
        default : true
    },
    available : {
        type: Boolean,
        default : true
    },
}, {timestamps: true})

module.exports = mongoose.model("product", productSchema)