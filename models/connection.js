// import dependencies
require("dotenv").config()
const mongoose = require("mongoose")

// establish database connection
const DATABASE_URL = process.env.DATABASE_URL 
const CONFIG = {  
    useNewUrlParser: true,
    useUnifiedTopology: true
}

// connect to mongo
mongoose.connect(DATABASE_URL, CONFIG)
// mongo connection messages
mongoose.connection
.on("open", () => console.log("Connected to Mongo"))
.on("close", () => console.log("Disconnected from mongo"))
.on("error", (error) => console.log(error))

//export mongo connection
module.exports = mongoose