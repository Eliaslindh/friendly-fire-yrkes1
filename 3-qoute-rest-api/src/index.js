const express = require("express")
const app = express()
const quotes = require("./data/quotes.json")
app.use(express.static('public'))

app.get("/api/quote", (req, res) => {
    const randomItem = quotes[Math.floor(Math.random() * quotes.length)]
    res.json(randomItem)
})

app.listen(3000, () => {
    console.log("server fan is running")
})