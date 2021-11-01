// import dependencies
const mongoose = require("./connection")
const Dog = require("./dog")

// seed
// save connection to mongoose in a variable
const db = mongoose.connection
//     name: {type:String, required: true},
//     age: {type:Number, min: 0},
//     breed: String,
//     gender: String,
//     hobbies: [String],
//     img: [String],
//     slideshow1: String,
//     slideshow2: String,
//     slideshow3: String,

db.on("open", () => {

    const startDogs = [{
        name: "Pup Luna",
        age: "1 month",
        breed: "Shiba",
        gender: "Female",
        hobbies: "Sleeping and Eating",
        img: "https://i.imgur.com/QQpVHeW.jpg",
        slideshow1: "https://imgur.com/OJIY3G8",
        slideshow2: "https://imgur.com/7qQt8yn",
        slideshow3: "https://imgur.com/oXngpXv",
    }
    ];


    Dog.deleteMany({})
        .then((data) => {
            Dog.create(startDogs).then((data) => {
                console.log(data)
                db.close()
            })
        })
})