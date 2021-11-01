// import dependencies
const mongoose = require("./connection")

// dog model
const {Schema, model} = mongoose 
const dogSchema = new Schema({
    name: {type:String, required: true},
    age: {type:String, min: 0},
    breed: String,
    gender: String,
    hobbies: [String],
    img: String,
    slideshow1: String,
    slideshow2: String,
    slideshow3: String,
})

const Dog = model("Dog", dogSchema)

// export dog model
module.exports = Dog