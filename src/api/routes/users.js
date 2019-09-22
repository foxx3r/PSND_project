const express = require("express")
const app = express()
const cookieSession = require("cookie-session")
const session = require("express-session")
const handlebars = require("express-handlebars")
const bodyParser = require("body-parser")
const flash = require("connect-flash")
const helmet = require("helmet")
require("dotenv").config()

// config
app.engine("handlebars", handlebars({ defaultLayout: "main" }))
app.set("view engine", "handlebars")

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static("public"))
app.use(express.static("views"))

app.use(helmet())

app.set("trust proxy", 1)
app.use(session({
  secret: process.env.COOKIE_SECRET,
  saveUninitialized: true,
  resave: true,
  cookie: { secure: true }
}))

app.use(cookieSession({
  name: "session",
  keys: ["key1", "key2"]
}))

app.use(flash())

// routes
app.get("/", (req, res, next) => {
  res.render("pages/home")
})

module.exports = app
