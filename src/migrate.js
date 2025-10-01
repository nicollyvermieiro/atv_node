require('dotenv').config();
const fs = require('fs');
const pool = require('./src/db');

async function runMigrations() {
  try {
    const sql = fs.readFileSync('init.sql', 'utf8');
    await pool.query(sql);
    console.log('Migrations rodadas com sucesso!');
    await pool.end();
  } catch (err) {
    console.error('Erro ao rodar migrations:', err);
    process.exit(1);
  }
}

runMigrations();
