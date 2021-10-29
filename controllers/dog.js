// import dependencies
const express = require("express")
// dog model
const Dog = require("../models/dog.js")

// router
const router = express.Router()

// router middleware
router.use((req, res, next) => {
    if (req.session.loggedIn) {
        next()
    } else {
        res.redirect("/user/login")
    }
})
// seed
router.get("/seed", (req, res) => {
    const startDogs = [
        { name: "Pompom", age: 3, breed: "Pomeranian", gender: "Female", hobbies: ["sleeping", "eating", "playing"], img:"https://imgur.com/QQpVHeW"}

    ];
    Dog.deleteMany({})
    .then((data) => {
        Dog.create(startDogs)
        .then((data) => {
           res.json(data)
        })
    })
})

// index
router.get("/", (req, res) => {
    Dog.find({ username: req.session.username })
        .then((dogs) => {
            res.render("dogs/index.liquid", { dogs })
        })
        .catch((error) => {
            res.json({ error })
        })
})
// new
router.get("/new", (req, res) => {
    res.render("dogs/new.liquid")
})
// create
router.post("/", (req, res) => {
    req.body.username = req.session.username
    Dog.create(req.body)
        .then((dog) => {
            res.redirect("/dogs")
        })
        .catch((error) => {
            res.json({ error })
        })
})

// edit
router.get("/:id/edit", (req, res) => {
    const id = req.params.id
    Dog.findById(id)
        .then((dog) => {
            res.render("dogs/edit.liquid", { dog })
        })
        .catch((error) => {
            res.json({ error })
        })
})
// update
router.put("/:id", (req, res) => {
    const id = req.params.id
    Dog.findByIdAndUpdate(id, req.body, { new: true })
        .then((dog) => {
            res.redirect("/dogs")
        })
        .catch((error) => {
            res.json({ error })
        })

})

// destroy
router.delete("/:id", (req, res) => {
    const id = req.params.id
    Dog.findByIdAndRemove(id)
        .then((dog) => {
            res.redirect("/dogs")
        })
        .catch((error) => {
            res.json({ error })
        })
})

// show
router.get("/:id", (req, res) => {
    const id = req.params.id
    Dog.findById(id)
        .then((dog) => {
            res.render("dogs/show.liquid", { dog })
        })
        .catch((error) => {
            res.json({ error })
        })
})

// export router
module.exports = router



