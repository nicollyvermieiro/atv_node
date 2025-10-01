const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
  ssl: false // força sem SSL no Windows
});

pool.on('error', (err) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});

module.exports = pool;



// const pool = new Pool({
//     user: process.env.DB_USER || "postgres",
//     host: process.env.DB_HOST || "localhost",
//     database: process.env.DB_NAME || "clientesdb",
//     password: process.env.DB_PASSWORD || "postgres",
//     port: process.env.DB_PORT || 5432,
//   });