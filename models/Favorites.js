const mongoose = require("mongoose");

const Favorites = mongoose.model("Favorites", {
    id: String,
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  });

module.exports = Favorites;
