const express = require("express")
const app = express()
const cookieSession = require("cookie-session")
const session = require("express-session")
const handlebars = require("express-handlebars")
const bodyParser = require("body-parser")
const flash = require("connect-flash")
const helmet = require("helmet")
const db = require("../model/schemas")
const bcrypt = require("bcryptjs")
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
  secret: process.env.SESSION,
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false }
}))

  /*app.use(cookieSession({
  name: "cookie_session",
  keys: ["key1", "key2"]
}))*/

app.use(flash())

const salt = bcrypt.genSaltSync(10)

// routes
app.get("/", (req, res, next) => {
  res.render("pages/home")
})

app.get("/success", (req, res, next) => {
  res.render("pages/success")
})

app.get("/register", (req, res, next) => {
  res.render("pages/register")
})

app.post("/register", async (req, res, next) => {
  await new db.clienteSchema({
    nome: req.body.nome,
    nascimento: req.body.nascimento,
    DDD: req.body.DDD,
    telefone: req.body.telefone,
    CEP: req.body.CEP,
    CC: req.body.CC,
    CPF: req.body.CPF,
    email: req.body.email,
    senha: bcrypt.hashSync(req.body.senha)
  }).save()
    .then( () => {
      res.redirect("/success")
    }).catch( (error) => {
      console.log("Erro ao cadastrar usuario: " + error)
      res.redirect("/register")
    })
})

module.exports = app
