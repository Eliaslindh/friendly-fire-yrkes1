const express = require("express")
const { db } = require('./db')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extendend: true }))

app.get('/api/cars', (req, res) => {
    // hämtar all data
    db.query('SELECT * FROM cars', (err, rows) => {
        if (err) throw err.message
        res.status(200).json(rows)
    })
})
app.post('/api/cars', (req, res) => {
    //sparar till database
    db.query('INSERT INTO cars(brand, model, year) VALUES (?,?,?)',
        [`${req.body.brand}`, `${req.body.model}`, `${req.body.year}`],
        (err, rows) => {
            if (err) throw err.message
            res.status(200).json(rows)
        })
})
app.put('/api/cars/:id', (req, res) => {
    db.query('UPDATE cars SET brand = ?, model = ? WHERE id = ?',
        [`${req.body.brand}`, `${req.body.model}`, `${req.params.id}`],
        (err, rows) => {
            if (err) throw err.message
            res.status(200).json(rows)
        })
})
app.delete('/api/cars/:id', (req, res) => {
    db.query('DELETE FROM cars WHERE id = ?',
        [`${req.params.id}`],
        (err, rows) => {
            if (err) throw err.message
            res.status(200).json(rows)
        })
})

app.listen(3000, () => {
    console.log('server is running');
})