const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

// ==> Conexión a base de datos:
const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

pool.on('connect', () => {
  console.log('Base de Datos conectada!');
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};