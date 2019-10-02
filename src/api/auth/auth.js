const localStrategy = require("passport-local").Strategy
const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")

const Cliente = mongoose.model("clientes")

module.exports = (passport) => {
  passport.use(new localStrategy({ usernameField: "email" }, (email, senha, done) => {
    Cliente.findOne({ email: email })
      .then( (cliente) => {
        if (!cliente) {
          return done(null, false, { message: "Esta conta nao existe" })
        } else {
          bcrypt.compare(senha, cliente.senha, (error, success) => {
            if (success) {
              return done(null, cliente)
            } else {
              return done(null, false, { message: "Senha incorreta" })
            }
          })
        }
      })
  }))

  passport.serializeUser( (cliente, done) => {
    done(null, cliente.id)
  })

  passport.deserializeUser( (id, done) => {
    Cliente.findById(id, (error, cliente) => {
      done(error, cliente)
    })
  })
}
