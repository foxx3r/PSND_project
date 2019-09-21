const mongoose = require("mongoose")

mongoose.connect("mongodb://10.0.0.103/test", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then( () => {
    console.log("Conectado com sucesso ao MongoDB")
  })
  .catch( (err) => {
    console.log("Houve um erro ao se conectar ao MongoDB: " + err)
  })

module.exports = mongoose
