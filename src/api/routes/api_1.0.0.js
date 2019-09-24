const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const helmet = require("helmet")
const cookieSession = require("cookie-session")
const session = require("express-session")
const flash = require("connect-flash")

// config
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static("public"))

app.use(helmet())

app.set("trust proxy", 1)
app.use(session({
  secret: "senha da sessao aqui",
  saveUninitialized: true,
  resave: true,
  cookie: { secure: false }
}))

app.use(cookieSession({
  name: "session",
  keys: ["key1", "key2"]
}))
app.use(flash())

// routes
app.get("/", (req, res, next) => {
  res.status(200).json({
    message: "um teste aqui"
  })
})

module.exports = app
