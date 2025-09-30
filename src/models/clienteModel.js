const pool = require("../db");

class ClienteModel {
  static async listar() {
    const result = await pool.query("SELECT * FROM clientes ORDER BY id ASC");
    return result.rows;
  }

  static async criar(nome, email) {
    const result = await pool.query(
      "INSERT INTO clientes (nome, email) VALUES ($1, $2) RETURNING *",
      [nome, email]
    );
    return result.rows[0];
  }
}

module.exports = ClienteModel;
