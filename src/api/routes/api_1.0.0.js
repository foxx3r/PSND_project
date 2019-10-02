const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const helmet = require("helmet")
const flash = require("connect-flash")
const db = require("../model/schemas")

// config
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static("public"))

app.use(helmet())

app.set("trust proxy", 1)
app.use(flash())

app.use(require("morgan")("dev"))

// routes
app.get("/", (req, res, next) => {
  res.status(200).json({
    message: "um teste aqui"
  })
})

module.exports = app
