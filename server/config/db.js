const mongoose = require("mongoose")

const connectDB = () => {
mongoose.connect(process.env.MONGO_URL)
}
module.exports = connectDB