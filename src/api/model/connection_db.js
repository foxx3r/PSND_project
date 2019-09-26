const mongoose = require("mongoose")
require("dotenv").config()

mongoose.connect(`mongodb://${process.env.MONGO_HOST}/test`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then( () => {
    console.log("Conectado com sucesso ao MongoDB")
  })
  .catch( (err) => {
    console.log("Houve um erro ao se conectar ao MongoDB: " + err)
  })

module.exports = mongoose
