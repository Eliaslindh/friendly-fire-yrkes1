const mysql = require('mysql2')

exports.db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'saferlogin',
    port: '3307'
})