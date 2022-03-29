const Pool = require('pg').Pool;

const pool = new Pool({
  user:"postgres",
  host: 'localhost',
  database: 'roladex',
  password:"allbetter",
  port:"5432"}
)
module.exports = Pool;
