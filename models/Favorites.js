const mongoose = require("mongoose");

const Favorites = mongoose.model("Favorites", {
    description: String,
    thumbnail: { path: String, extension: String },
    title: String,
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  });

module.exports = Favorites;
