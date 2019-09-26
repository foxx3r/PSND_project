const mongoose = require("./connection_db")
const Schema = mongoose.Schema

const empregados = new Schema({
  nome: {
    type: String,
    required: true,
    match: /[a-z]+/,
    min: 3,
    max: 20
  },
  DDD: {
    type: Number,
    required: true,
    match: /\d\d/,
    min: 1,
    max: 99
  },
  telefone: {
    type: Number,
    match: /\d+/,
    required: true,
    unique: true,
    min: 10000000,
    max: 999999999
  },
  nascimento: {
    type: Date,
    required: true
  },
  CEP: {
    type: String,
    required: true,
    unique: true,
    min: 8,
    max: 8
  },
  CC: {
    type: String,
    required: true,
    unique: true,
    min: 14,
    max: 16
  },
  CPF: {
    min: 11,
    max: 11,
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    max: 60
  },
  senha: {
    type: String,
    required: true
  }
})

const clientes = new Schema({
  nome: {
    type: String,
    required: true,
    match: /[a-z]+/,
    min: 3,
    max: 20
  },
  DDD: {
    type: Number,
    required: true,
    match: /\d\d/,
    min: 1,
    max: 99
  },
  telefone: {
    type: Number,
    match: /\d+/,
    required: true,
    unique: true,
    min: 10000000,
    max: 999999999
  },
  nascimento: {
    type: Date,
    required: true
  },
  CEP: {
    type: String,
    required: true,
    min: 8,
    max: 8,
    unique: true
  },
  CC: {
    type: String,
    required: true,
    unique: true,
    min: 14,
    max: 16
  },
  CPF: {
    min: 11,
    max: 11,
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    max: 60
  },
  senha: {
    type: String,
    required: true
  }
})

mongoose.model("clientes", clientes)
mongoose.model("empregados", empregados)

const clienteSchema = mongoose.model("clientes")
const empregadoSchema = mongoose.model("empregados")

module.exports = {
  clienteSchema: clienteSchema,
  empregadoSchema: empregadoSchema
}
