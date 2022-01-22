const express = require('express')
const randomWords = require('random-words')
const cors = require('cors')

const app = express()
const port = 9000

app.use(cors());

app.get('/api/word', async (req, res) => {
    await new Promise(resolve => setTimeout(resolve, 3000));
    res.send({word: randomWords()})
})

app.listen(port, () => {
    console.log(`Example app listening at PORT:${port}`)
})