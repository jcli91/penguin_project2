// import dependencies
require("dotenv").config()
const express = require("express")
const morgan = require("morgan")
const methodOverride = require("method-override")

const path = require("path")
const DogsRouter = require("./controllers/dog")
const UserRouter = require("./controllers/user")

//sessions
const session = require("express-session")
const MongoStore = require("connect-mongo")

// import liquid
const liquid = require("liquid-express-views")
// absolute path
const viewsFolder = path.resolve(__dirname, "views/")
const app = liquid(express(), {root: viewsFolder})


//middleware
app.use(morgan("tiny"))
app.use(methodOverride("_method"))
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))

//create sessions w/ middleware
app.use(session({
    secret: process.env.SECRET,
    store: MongoStore.create({mongoUrl: process.env.DATABASE_URL}),
    resave: false

}))

// routes
app.get("/", (req, res) => {
    res.render("index.liquid")
})

app.use("/dogs", DogsRouter)
app.use("/user", UserRouter)



//listener
const PORT = process.env.PORT || 3000
app.listen(PORT, console.log(`Listening on PORT ${PORT}`))