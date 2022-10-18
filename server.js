const express = require("express");
const app = express();
const itr = [
  "It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"
]

app.get("/", (req, res) => {
  res.send("<H1>Hey there!!!</H1>");
});

app.get("/greeting/:name?", (req, res) => {
  if (req.params.name) {
    res.send("<H1>What's up, " + req.params.name + "! It's so great to see you!</H1>");
  } else {
    res.send("<H1>Hello, Stranger</H1>");
  }
});

app.get('/tip/:total/:tipPercentage', (req, res) => {
  let total = parseInt(req.params.total)
  let tipPercentage = parseInt(req.params.tipPercentage)
  res.send(`${parseInt(req.params.total) * parseInt(req.params.tipPercentage)/100}`)
})


app.get('/magic', (req, res) => {
  let htmlResponse = "";
  for(let itr = 0; itr < arr.length; itr++) {
      htmlResponse += "<h1>" + arr[itr] + "</h1>";
  }


})
























app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
