const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: process.env.PGUSER || "node_user",
  host: process.env.PGHOST || "localhost",
  database: process.env.PGDATABASE || "clientesdb",
  password: process.env.PGPASSWORD || "node123",
  port: process.env.PGPORT || 5432,
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