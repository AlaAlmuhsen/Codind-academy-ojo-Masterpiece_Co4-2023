const express = require("express");
const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

// middleware
router.use(requireAuth);

//controllers
// const { login, signup } = require("../controllers/userControllers");

// Login User
router.get("/", (req, res) => {
   res.json({ mssg: "aa" });
});

module.exports = router;
