const express = require('express')
const app = express()



// Greetings
app.get('/greeting', (req, res) => {
    res.status(200).send(`<h1>Hello stranger</h1>`)
})

app.get('/greeting/:name', (req, res) => {
    res.status(200).send(`<h1>${req.params.name}</h1>`)
})


// Tip Calculator
app.get('/tip/:total/:tipPercentage', (req, res) => {
    res.status(200).send(`<h1>${req.params.total.tipPercentage}</h1>`)
})

 // Magic 8 Ball
app.get('/magic/:question', (req, res) => {
    const phrases = [
        "It is certain",
        "It is decidedly so",
        "Without a doubt",
        "Yes definitely",
        "You may rely on it",
        "As I see it yes", 
        "Most likely",
        "Outlook good",
        "Yes",
        "Signs point to yes",
        "Reply hazy try again",
        "Ask again later",
        "Better not tell you now",
        "Cannot predict now",
        "Concentrate and ask again",
        "Don't count on it",
        "My reply is no",
        "My sources say no",
        "Outlook not so good",
        "Very doubtful"
    ]

    const randomNum = Math.floor(Math.random() * phrases.length)
    res.status(200).send(`<h1>${req.params.question}</h1> <p>${phrases[randomNum]}</p>`)
})



app.listen(3000, () => {
    console.log('I am listening on port 3000')
})