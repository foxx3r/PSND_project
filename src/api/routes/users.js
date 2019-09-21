const express = require("express")
const app = express()
const path = require("path")
const handlebars = require("express-handlebars")
const bodyParser = require("body-parser")
const favicon = require("serve-favicon")

// config
app.engine("handlebars", handlebars({ defaultLayout: "main" }))
app.set("view engine", "handlebars")

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static("public"))
app.use(express.static("views"))
app.use(favicon(path.join("public/favicon", "favicon.ico")))

// routes
app.get("/", (req, res, next) => {
  res.render("pages/home")
})

module.exports = app
