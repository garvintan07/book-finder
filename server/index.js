const express = require('express')
const app = express()
const port = 3000
const path = require('path');
const mongoose = require('../database/index.js')
const cors = require('cors')

app.get('/', (req, res) => res.send('Hello World!'))
// app.use(express.static(path.join(__dirname, '../dist')))
app.use(cors())
app.use(express.json())

app.get('/books', (req,res) => {
    mongoose.get((error,response) => {
        if (error) {
            res.send(error)
        } else {
            res.send(response)
        }
    })
})

app.post('/books', (req, res) => {
    const book = req.body
    mongoose.post(book, (error, response) => {
        if (error) {
            res.send(error)
        } else {
            res.send(response)
        }
    })
})

app.listen(port, () => console.log(`Example app listening on port port!`))