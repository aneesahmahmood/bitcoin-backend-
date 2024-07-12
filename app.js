const express = require("express");
require("dotenv").config();
const endpoints = require("./endpoint.json");

const app = express();
app.use(express.json());

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get("/bitcoin-price", (req, res, next) => {
  res.status(200).json(endpoints);
});


//postgres database needs creating/ 1 table bitcoin prices, 2 field, timestamp and price 
// cron job - create scripts to get new data - adds a new row in database