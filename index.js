const axios = require("axios");
require("dotenv").config();

axios
  .get(`https://pro-api.coinmarketcap.com/v2/tools/price-conversion??api_key=${process.env.COINMARKETCAP_API_KEY}`)
  .then((response) => {
    console.log(response.data);
  });

// axios
//   .get(
//     `https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}`
//   )
//   .then((response) => {
//     console.log(response.data);
//   });
