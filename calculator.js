const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

const port = 3000;

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  console.log(req.body);

  let num1 = Number(req.body.num1);
  let num2 = Number(req.body.num2);

  let result = num1 + num2;

  res.send("The result of the calculation is: " + result);
});

app.get("/bmicalculator", function (req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function (req, res) {
  console.log(req.body);

  let weight = parseFloat(req.body.num1);
  let height = parseFloat(req.body.num2);

  let result = weight / Math.pow(height, 2);

  res.send("The result of the calculation is: " + result);
});

app.listen(3000, () => {
  console.log(`Server 🚀 starting on port ${port}`);
});
