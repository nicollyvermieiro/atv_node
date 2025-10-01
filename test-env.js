const pool = require('./db');

(async () => {
  try {
    const res = await pool.query('SELECT NOW()');
    console.log('Conexão OK:', res.rows[0]);
    await pool.end();
  } catch (err) {
    console.error('Erro na conexão:', err);
  }
})();
