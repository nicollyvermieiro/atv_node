const express = require("express");
const bodyParser = require("body-parser");
const clienteRoutes = require("./routes/clienteRoutes");
const path = require("path");

const app = express();

// Configurações do EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "views")));

// Rotas
app.use("/", clienteRoutes);

// Exporta o app, sem chamar listen aqui (servidor é iniciado no server.js)
module.exports = app;
