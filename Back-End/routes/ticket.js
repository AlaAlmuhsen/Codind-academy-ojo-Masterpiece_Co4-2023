const express = require("express");
const requireAuth = require("../middleware/requireAuth");
const {
   getTickets,
   // getTicket,
   createTicket,
   // deleteTicket,
   // updateTicket,
} = require("../controllers/ticketControllers");

const router = express.Router();

// middleware
router.use(requireAuth);

// Get Events
router.get("/", getTickets);

// // Get a single Event
// router.get("/:id", getEvent);

// create ticket
router.post("/", createTicket);

// // delete Event
// router.delete("/:id", deleteEvent);

// // update Event
// router.patch("/:id", updateEvent);

module.exports = router;
