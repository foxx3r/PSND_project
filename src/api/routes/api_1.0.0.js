const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const helmet = require("helmet")

// config
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static("public"))

app.use(helmet())

// routes
app.get("/", (req, res, next) => {
  res.status(200).json({
    message: "um teste aqui"
  })
})

module.exports = app
