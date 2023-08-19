const express = require("express");

//controllers
const { login, signup } = require("../controllers/userControllers");

const router = express.Router();

// Login User
router.post("/login", login);

// Signup User
router.post("/signup", signup);

module.exports = router;
