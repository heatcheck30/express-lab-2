const express = require("express");
const app = express();

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


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
