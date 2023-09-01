require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URI);

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

const comicsCharacterRoutes = require("./routes/comics-character");
app.use(comicsCharacterRoutes);

const signupRoutes = require("./routes/signup");
app.use(signupRoutes);

const loginRoutes = require("./routes/login");
app.use(loginRoutes);

app.all("*", (req, res) => {
  return res.status(400).json(error.message);
});

app.listen(process.env.PORT, () => {
  console.log("Server started !");
});
