const express = require("express")
const app = express()
require('dotenv').config()
const port = process.env.port

console.log("You're doing well")
app.listen(port, () => console.log (`Server started on http://localhosst:${port}`))
