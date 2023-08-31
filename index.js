require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  try {
    return res.json(200).json("welcome to Marvel");
  } catch (error) {
    return res.status(400).json(message.error);
  }
});

const comicsRoutes = require("./routes/comics");
app.use(comicsRoutes);

const charactersRoutes = require("./routes/characters");
app.use(charactersRoutes);

const characterRoutes = require("./routes/character");
app.use(characterRoutes);

const comicRoutes = require("./routes/comic");
app.use(comicRoutes);

const comicsCharacter = require("./routes/comics-character");
app.use(comicsCharacter);

app.all("*", (req, res) => {
  return res.status(400).json("not found");
});

app.listen(process.env.PORT, () => {
  console.log("Server started !");
});
