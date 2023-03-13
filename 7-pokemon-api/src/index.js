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
    db.query('SELECT * FROM pokemon', (err, rows) => {
        if (err) throw err.message
        res.status(200).json(rows)
    })
})

app.get('/api/pokemon', (request, response) => {
    response.status(200).json(pokemons.map(pokemon => ({
        id: pokemon.name,
    })));
});


app.listen(3000, () => {
    console.log('server is running');
})