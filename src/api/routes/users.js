const express = require("express")
const app = express()
const handlebars = require("express-handlebars")
const bodyParser = require("body-parser")
const flash = require("connect-flash")
const helmet = require("helmet")
const db = require("../model/schemas")
const session = require("express-session")
const bcrypt = require("bcryptjs")
const passport = require("passport")
require("../auth/auth")(passport)
require("dotenv").config()

// config
app.engine("hbs", handlebars({
    defaultLayout: "main",
    extname: ".hbs"
}))
app.set("view engine", "hbs")

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static("public"))
app.use(express.static("views"))

app.use(helmet())
app.use(require("morgan")("dev"))

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))
app.use(flash())

app.use( (req, res, next) => {
  res.locals.success_message = req.flash("success_message")
  res.locals.error_message = req.flash("error_message")
  next()
})

app.set("trust proxy", 1)

app.use(passport.initialize())
app.use(passport.session())

const salt = bcrypt.genSaltSync(10)

// routes
app.get("/", (req, res, next) => {
  res.render("pages/home")
})

app.get("/register", (req, res, next) => {
  res.render("pages/register")
})

app.get("/login", (req, res, next) => {
  res.render("pages/login")
})

app.post("/login", (req, res, next) => {
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true
  })
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
      res.redirect(307, "/success")
    }).catch( (error) => {
      console.log("Erro ao cadastrar usuario: " + error)
      res.redirect("/register")
    })
})

app.get("/test", (req, res, next) => {
  req.flash("success_message", "Usuario criado com sucesso.")
  res.redirect("/register")
})

module.exports = app
