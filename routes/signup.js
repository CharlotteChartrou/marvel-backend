const express = require("express");
const router = express.Router();

const User = require("../models/User");
const SHA256 = require("crypto-js/sha256");
const encBase64 = require("crypto-js/enc-base64");
const uid2 = require("uid2");

router.post("/signup", async (req, res) => {
  try {
    const password = req.body.password;
    const salt = uid2(16);
    const hash = SHA256(password + salt).toString(encBase64);
    const token = uid2(16);

    const foundUser = await User.findOne({ email: req.body.email });
    if (req.body.username === "") {
      return res.status(400).json("username non renseigné");
    }
    if (foundUser === null) {
      const newUser = new User({
        email: req.body.email,
        account: {
          username: req.body.username,
        },
        newsletter: req.body.newsletter,
        token,
        hash,
        salt,
      });

      await newUser.save();
      const responseObject = {
        _id: newUser._id,
        token: newUser.token,
        account: {
          username: newUser.account.username,
        },
      };
      console.log(responseObject);
      res.status(200).json(responseObject);
    } else {
      return res.status(400).json("already exist");
    }
  } catch (error) {
    console.log(error);
    res.status(400).json(error.message);
  }
});

module.exports = router;
