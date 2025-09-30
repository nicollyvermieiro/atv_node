const express = require("express");
const ClienteController = require("../controllers/clienteController");

const router = express.Router();

router.get("/", ClienteController.listar);
router.post("/clientes", ClienteController.criar);

module.exports = router;
