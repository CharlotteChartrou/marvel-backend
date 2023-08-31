const express = require("express");
const router = express.Router();
require("dotenv").config();
const axios = require("axios");

router.get("/characters", async (req, res) => {
  const my_api_key = process.env.MY_API_KEY;
  try {
    const name = req.query.name || "";
    const skip = req.query.skip || 0;
    const limit = req.query.limit || 100;

    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${my_api_key}&name=${name}&skip=${skip}&limit=${limit}`
    );

    res.status(200).json(response.data);
  } catch (error) {
    console.log(error.message);
    res.status(400).json("error occured");
  }
});

module.exports = router;
