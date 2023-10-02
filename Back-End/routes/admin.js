const express = require("express");
const requireAuth = require("../middleware/requireAuth");
const { getAdminData } = require("../controllers/adminControllers");

const router = express.Router();

// middleware
router.use(requireAuth);

// Get Events
router.get("/", getAdminData);

module.exports = router;
