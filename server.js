// import dependancies
const express = require("express")
const app = express()

app.get("/", (req, res) => {
    res.send("This App is Working!!")
})

//listener
const PORT = process.env.PORT || 3000
app.listen(PORT, console.log(`Listening on PORT ${PORT}`))