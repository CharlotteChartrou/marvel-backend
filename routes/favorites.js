const express = require("express");
const router = express.Router();


const Favorites = require("../models/Favorites")

router.post("/favorites", async (req, res) => {
  try {
   

    const newFavorites = new Favorites({
      description: req.body.description,
      thumbnail: { path: req.body.path, extension: req.body.extension },
      title: req.body.title,
      owner: user,
    });

    await newFavorites.save();
    res.status(200).json(newFavorites);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

router.get("/favorites", async (req, res) => {
  try {
    const favorites = await Favorites.find 
    .select("description thumbnail title")

    res.status(200).json(favorites);
  } catch (error) {
    res.status(400).json("aucun favoris");
  }
}); 

module.exports = router;
//ccc