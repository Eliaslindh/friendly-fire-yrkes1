const express = require("express")
const mysql = require("mysql2")
const path = require('path')
const app = express()

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'pokemon',
    // port: '3307'
})
console.log(db);

app.use(express.static(path.resolve('public')))


app.get('/api/pokemon', (req, res) => {
    const name = req.query.params;
    db.query(`SELECT * FROM pokemon WHERE name LIKE "%${req.query.name}%"`, (err, rows) => {
        if (err) throw err.message
        res.status(200).json(rows)
    })
})


app.listen(3000, () => {
    console.log('server is running');
})