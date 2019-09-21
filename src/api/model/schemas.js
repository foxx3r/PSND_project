const mongoose = require("./connection_db")
const Schema = mongoose.Schema

const empregados = new Schema({
  nome: {
    type: String,
    require: true,
    match: /[a-z]/
  },
  nascimento: {
    type: Date,
    require: true
  },
  CC: {
    type: String,
    require: true
  },
  CPF: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  },
  senha: {
    type: String,
    require: true
  }
})

const clientes = new Schema({
  nome: {
    type: String,
    require: true,
    match: /[a-z]/
  },
  nascimento: {
    type: Date,
    require: true
  },
  CC: {
    type: String,
    require: true
  },
  CPF: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  },
  senha: {
    type: String,
    require: true
  }
})
