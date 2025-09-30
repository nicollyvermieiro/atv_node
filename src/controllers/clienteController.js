const ClienteModel = require("../models/clienteModel");

class ClienteController {
  static async listar(req, res) {
    const clientes = await ClienteModel.listar();
    res.render("index", { clientes });
  }

  static async criar(req, res) {
    const { nome, email } = req.body;
    if (!nome || !email) {
      return res.status(400).send("Nome e Email são obrigatórios!");
    }
    await ClienteModel.criar(nome, email);
    res.redirect("/");
  }
}

module.exports = ClienteController;
