const express = require("express")
const app = express()
const cookieParser = require("cookie-parser")
const routerauth = require("./route/auth.routes")  // ./ not ../
const musicroute = require("./route/music.route")

app.use(express.json())
app.use(cookieParser())


app.use("/api/auth", routerauth)  // also changed /api/post to /api/auth
app.use("/api/auth", musicroute)
module.exports = app