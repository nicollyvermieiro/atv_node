const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: process.env.DB_USER || "postgres",
  host: process.env.DB_HOST || "db", // importante: serviço do docker-compose
  database: process.env.DB_NAME || "clientesdb",
  password: process.env.DB_PASSWORD || "postgres",
  port: process.env.DB_PORT || 5432,
});

pool.on('connect', () => {
  console.log('✅ Conectado ao PostgreSQL com sucesso!');
});

pool.on('error', (err) => {
  console.error('❌ Erro inesperado no cliente do PostgreSQL', err);
  process.exit(-1);
});

module.exports = pool;
