const express = require("express")
const mysql = require("mysql2")
const path = require('path')
const app = express()

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'gamesdb',
    port: '3307'
})
console.log(db);

app.use(express.static(path.resolve('public')))


app.get('/api/games', (req, res) => {
    db.query('SELECT * FROM games', (err, rows) => {
        if (err) throw err.message
        res.status(200).json(rows)
    })
})

app.get('/api/games', (request, response) => {
    response.status(200).json(movies.map(game => ({
        id: game.name,
        releaseDate: game.release_date,
        age: game.publish,
        genres: game.genres,
        releaseDate: game.releaseDate,
        rating: movie.rating
    })));
});


app.listen(3000, () => {
    console.log('server is running');
})