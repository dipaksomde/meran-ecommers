const express = require("express")
const mongoose = require("mongoose")
const connectDB = require("./config/db")


require("dotenv").config({path : "./.env"})

connectDB()

const app = express()
app.use(express.json())

app.use("/api/user", require('./routes/userRoutes'))
app.use("/api/product", require('./routes/ProdutRoutes'))


mongoose.connection.once("open", e => {
    console.log("MONGO CONNECTED")
    
app.listen(process.env.PORT || 5000, err => {
    if (err) {
        return console.log(`UNABLE TO START ${err}`)
    }
    console.log(`http://localhost:${process.env.PORT || 5000}`)
})
})

mongoose.connection.on("error", err => console.log(`MONGO ERROR ${err}`))
