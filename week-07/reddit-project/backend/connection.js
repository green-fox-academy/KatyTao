const { createConnection } = require("mysql2");
module.exports = createConnection({
  host: "localhost" || process.env.MYSQL_HOST,
  port: 3306 || process.env.MYSQL_PORT,
  user: "root" || process.env.MYSQL_USER,
  password: "password" || process.env.MYSQL_PASS,
  database: "reddit" || process.env.MYSQL_DATABASE,
  multipleStatements: true
});
