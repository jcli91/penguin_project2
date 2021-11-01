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
    const startDogs = [{
        name: "Pup Luna",
        age: "1 month",
        breed: "Shiba",
        gender: "Female",
        hobbies: "Sleeping and Eating",
        img: "https://i.imgur.com/QQpVHeW.jpg",
        slideshow1: "https://imgur.com/a/8uCzyzr.jpg",
        slideshow2: "https://imgur.com/a/Efos5QG.jpg",
        slideshow3: "https://imgur.com/OJIY3G8.jpg",
    },
    {
        name: "Luna1",
        age: "3 month",
        breed: "Shiba",
        gender: "Female",
        hobbies: "Sleeping, Eating, and Teething",
        img: "https://imgur.com/oXngpXv.jpg",
        slideshow1: "https://imgur.com/ObGVGyT.jpg",
        slideshow2: "https://imgur.com/7qQt8yn.jpg",
        slideshow3: "https://imgur.com/a/F8cC3Sj.jpg",
    },
    {
        name: "Luna2",
        age: "6 month",
        breed: "Shiba",
        gender: "Female",
        hobbies: "Sleeping, Eating, Teething, and Running",
        img: "https://imgur.com/7qQt8yn.jpg",
        slideshow1: "https://imgur.com/a/ZomAUl4.jpg",
        slideshow2: "https://imgur.com/7qQt8yn.jpg",
        slideshow3: "https://imgur.com/oXngpXv.jpg",
    },
    {
        name: "Luna3",
        age: "1 month",
        breed: "Shiba",
        gender: "Female",
        hobbies: "Sleeping and Eating",
        img: "https://imgur.com/OJIY3G8.jpg",
        slideshow1: "https://imgur.com/OJIY3G8.jpg",
        slideshow2: "https://imgur.com/7qQt8yn.jpg",
        slideshow3: "https://imgur.com/oXngpXv.jpg",
    },
    {
        name: "Luna4",
        age: "1 month",
        breed: "Shiba",
        gender: "Female",
        hobbies: "Sleeping and Eating",
        img: "https://imgur.com/ObGVGyT.jpg",
        slideshow1: "https://imgur.com/OJIY3G8.jpg",
        slideshow2: "https://imgur.com/7qQt8yn.jpg",
        slideshow3: "https://imgur.com/oXngpXv.jpg",
    },
    {
        name: "random",
        age: "1 month",
        breed: "Shiba",
        gender: "Female",
        hobbies: "Sleeping and Eating",
        img: "https://i.guim.co.uk/img/media/8282695e7f658f7c8e708290c93f14b84f0c8a68/0_483_3600_2161/master/3600.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=acfcc7c8fb733c6a4a2185c337500247",
        slideshow1: "https://imgur.com/OJIY3G8.jpg",
        slideshow2: "https://imgur.com/7qQt8yn.jpg",
        slideshow3: "https://imgur.com/oXngpXv.jpg",
    },
    {
        name: "random",
        age: "1 month",
        breed: "Shiba",
        gender: "Female",
        hobbies: "Sleeping and Eating",
        img: "https://st.depositphotos.com/1594185/1470/i/950/depositphotos_14708979-stock-photo-goldfish-cracker.jpg",
        slideshow1: "https://imgur.com/OJIY3G8.jpg",
        slideshow2: "https://imgur.com/7qQt8yn.jpg",
        slideshow3: "https://imgur.com/oXngpXv.jpg",
    },
    {
        name: "random",
        age: "1 month",
        breed: "Shiba",
        gender: "Female",
        hobbies: "Sleeping and Eating",
        img: "https://www.slashfilm.com/img/gallery/movies-to-watch-if-you-loved-godzilla-vs-kong/l-intro-1630623240.jpg",
        slideshow1: "https://imgur.com/OJIY3G8.jpg",
        slideshow2: "https://imgur.com/7qQt8yn.jpg",
        slideshow3: "https://imgur.com/oXngpXv.jpg",
    },
    {
        name: "random",
        age: "1 month",
        breed: "Shiba",
        gender: "Female",
        hobbies: "Sleeping and Eating",
        img: "https://www.looper.com/img/gallery/every-king-kong-movie-ranked-worst-to-best/intro-1617312244.jpg",
        slideshow1: "https://imgur.com/OJIY3G8.jpg",
        slideshow2: "https://imgur.com/7qQt8yn.jpg",
        slideshow3: "https://imgur.com/oXngpXv.jpg",
    }
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



