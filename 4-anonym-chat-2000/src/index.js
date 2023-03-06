const express = require("express")
const app = express()
app.use(express.static('public'))

const messages = [{ message: "hej på dig" },
{
    messge: "naa"
},
{ message: "neh1" }]


app.get("/api/messages", (req, res) => {
    res.status(200).json(messages)
})

app.post("api/messages", (req, res) => {

})

app.listen(3000, () => {
    console.log("server fan is running")
})