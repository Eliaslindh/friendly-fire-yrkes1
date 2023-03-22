const express = require("express")
const mysql = require("mysql2")
const path = require('path')
const app = express()
app.use(express.static(path.resolve('public')))

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'temperature',
})
console.log(db);

app.get('/api/temperature/:year', (req, res) => {
    db.query('SELECT * FROM temperature WHERE year = ?', [req.params.year], function (err, rows) {
        res.json(rows)
    })
})

app.get('/api/temperature/:id', (req, res) => {
    res.status(200).sendFile(path.resolve("public/index.html"))
})


app.listen(3000, () => {
    console.log('server is running');
})