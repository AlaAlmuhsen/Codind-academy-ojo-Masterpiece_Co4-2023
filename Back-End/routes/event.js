const express = require("express");
const requireAuth = require("../middleware/requireAuth");
const {
   getEvents,
   getEvent,
   createEvent,
   deleteEvent,
   updateEvent,
} = require("../controllers/eventControllers");

const router = express.Router();

// middleware
router.use(requireAuth);

// Get Events
router.get("/", getEvents);

// Get a single Event
router.get("/:id", getEvent);

// create Event
router.post("/", createEvent);

// delete Event
router.delete("/:id", deleteEvent);

// update Event
router.patch("/:id", updateEvent);

module.exports = router;
