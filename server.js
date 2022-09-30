const express = require('express')
const app = express()

// Greetings

app.get('/greeting', (req, res) => {
    res.status(200).json({ msg: 'Hello stranger' })
})

// Tip Calculator


// Magic 8 Ball


app.listen(3000, () => {
    console.log('Ashley is listening')
})