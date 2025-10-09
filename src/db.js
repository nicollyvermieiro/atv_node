// db.js
const { Pool } = require("pg");

const pool = new Pool({
  host: process.env.PGHOST || "127.0.0.1", // hostname do container
  port: process.env.PGPORT || 5432,        // porta do Postgres
  user: process.env.PGUSER || "postgres",  // usuário
  password: process.env.PGPASSWORD || "postgres", // senha
  database: process.env.PGDATABASE || "clientesdb", // nome do banco
});

module.exports = pool;
