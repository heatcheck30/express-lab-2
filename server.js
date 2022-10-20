const express = require("express");
const app = express();
const port = 3000;
//good place to put your responses array
const responses = [
  "It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"
]
//nice use of html elements to res.send()
app.get("/", (req, res) => {
  res.send("<H1>Hey there!!!</H1>"); //! browser says Hey there!
});
//? not needed
app.get("/greeting/:name", (req, res) => {
  if (req.params.name) {
    res.send("<H1>What's up, " + req.params.name + "! It's so great to see you!</H1>");
  } else {
    //great idea but not working because route is already set up to look for params 
    res.send("<H1>Hello, Stranger</H1>");
  }
});

app.get('/tip/:total/:tipPercentage', (req, res) => {
  //great idea with variables, use them!
  let total = parseInt(req.params.total)
  let tipPercentage = parseInt(req.params.tipPercentage)
  res.send(`${total * tipPercentage/100}`)
})


app.get('/magic/:question', (req, res) => {
  //you could create a random variable here too
  const rando = Math.floor(Math.random() *responses.length)
  res.send(`<h1>${req.params.question} = ${responses[rando]}</h1>`)

})


//you can just use your port variable
app.listen(port, () => {
  console.log("Server is running on port 3000");
})
