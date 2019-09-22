const app = require("express")()
const helmet = require("helmet")
const usersRoute = require("../routes/users")
const api100 = require("../routes/api_1.0.0")

// routes
app.use("/", usersRoute)
app.use("/api/1.0.0", api100)

module.exports = app
