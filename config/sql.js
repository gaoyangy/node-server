const mysql = require('mysql');
const pool= mysql.createPool({
  connectionLimit : 20,
  host            : 'localhost',
  user            : 'root',
  password        : 'root',
  database        : 'test'
});
module.exports = pool