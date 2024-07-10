const express = require("express");
require("dotenv").config();
const endpoints = require("./endpoint.json");

const app = express();
app.use(express.json());

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get("/bitcoinprice", (req, res) => {
  res.status(200).json(endpoints);
});
