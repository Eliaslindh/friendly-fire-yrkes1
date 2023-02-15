const express = require("express")
const app = express()


app.use(express.static('public'))

app.get('/hello', (req, res) => {
    res.send("Hej på Dig!")
})

app.get("/api/quote", (req, res) => {

})

app.listen(3000, () => {
    console.log("server fan is running")
})