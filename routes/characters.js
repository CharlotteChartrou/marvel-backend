const express = require("express");
const router = express.Router();
require("dotenv").config();
const axios = require("axios");

router.get("/characters", async (req, res) => {
  const my_api_key = process.env.MY_API_KEY;
  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${my_api_key}`
    );

    res.status(200).json(response.data);
  } catch (error) {
    console.log(error.message);
    res.status(400).json("error occured");
  }
});

module.exports = router;
