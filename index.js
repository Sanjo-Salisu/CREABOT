const { app } = require("./app");
const express = require("express");

require("dotenv").config();
const port = process.env.port;

app.use(express.static("public"));

app.set("view engine", "ejs");

app.listen(port, () =>
  console.log(`Server started listening on http://localhost:${port}`)
);
