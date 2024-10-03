const bodyParser = require("body-parser");
const express = require("express");
const app = express();
app.use(bodyParser.json());
const port = process.env.PORT || 3006;

app.get("/", function (req, res) {
  console.log(req.body.message);
  res.send("Hello bhai from local network");
});

app.listen(port);
