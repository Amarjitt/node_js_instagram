var mysql = require('mysql')
const { user , dbPassword , dbName} = require('../../config/secrets.json');
var connection = mysql.createConnection({
  host: 'localhost',
  user: user,
  password: dbPassword,
  database: dbName
})

connection.connect()
console.log('connected to DB');
module.exports= connection
