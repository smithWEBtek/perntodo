const Pool = require("pg").Pool

const pool = new Pool({
  user: "postgres",
  password: "pointer",
  host: "localhost",
  port: 5432,
  database: "perntodo2"
})

module.exports = pool;
