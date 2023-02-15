const express = require("express")
const app = express()


app.use(express.static('public'))

app.get('/server', (req, res) => {
    res.status(200).json
})

app.listen(3000, () => {
    console.log("server fan is running")
})