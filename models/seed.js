// import dependencies
const mongoose = require("./connection")
const Dog = require("./dog")

// seed
// save connection to mongoose in a variable
const db = mongoose.connection
// name: {type:String, required: true},
//     age: {type:Number, min: 0},
//     breed: String,
//     gender: String,
//     hobbies: [String],
//     img: [String]

db.on("open", () => {
    
    const startDogs = [
        {name: "Pompom", age: 3, breed: "Pomeranian", gender: "Female", hobbies: ["sleeping", "eating", "playing"], img: "https//imgur.com/QQpVHeW"}
        
      ];

   
    Dog.deleteMany({})
    .then((data) => {
         Dog.create(startDogs).then((data) => {
            console.log(data)
            db.close()
        })
    })
})