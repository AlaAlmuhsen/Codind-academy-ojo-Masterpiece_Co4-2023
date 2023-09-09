const mongoose = require("mongoose");
const Event = require("../models/eventModel");

// Get All Events
const getEvents = async (req, res) => {
   const events = await Event.find({}).sort({ createdAt: -1 });

   res.status(200).json(events);
};

// Get a Single Event
const getEvent = async (req, res) => {
   const { id } = req.params;

   if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "No Such Event" });
   }

   const event = await Event.findById(id);

   if (!event) {
      return res.status(404).json({ error: "No Such Event" });
   }

   res.status(200).json(event);
};

// create new event
const createEvent = async (req, res) => {
   const { eventTitle, eventOrganizer, numberOfTickets, DateOfEvent } =
      req.body;

   let emptyFields = [];

   if (!eventTitle) {
      emptyFields.push("eventTitle");
   }
   if (!eventOrganizer) {
      emptyFields.push("eventOrganizer");
   }
   if (!numberOfTickets) {
      emptyFields.push("numberOfTickets");
   }
   if (!DateOfEvent) {
      emptyFields.push("DateOfEvent");
   }
   if (emptyFields.length > 0) {
      return res
         .status(400)
         .json({ error: "Please fill in all the fields", emptyFields });
   }

   try {
      const event = await Event.create({
         eventTitle,
         eventOrganizer,
         numberOfTickets,
         DateOfEvent,
      });
      res.status(200).json(event);
   } catch (error) {
      res.status(400).json({ error: error.message });
   }
};

// delete a event
const deleteEvent = async (req, res) => {
   const { id } = req.params;

   if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "No such event" });
   }

   const event = await Event.findOneAndDelete({ _id: id });

   if (!event) {
      return res.status(400).json({ error: "No such event" });
   }

   res.status(200).json(event);
};

// update a event
const updateEvent = async (req, res) => {
   const { id } = req.params;

   if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "No such event" });
   }

   const event = await Event.findOneAndUpdate(
      { _id: id },
      {
         ...req.body,
      }
   );

   if (!event) {
      return res.status(400).json({ error: "No such event" });
   }

   res.status(200).json(event);
};

module.exports = {
   getEvents,
   getEvent,
   createEvent,
   deleteEvent,
   updateEvent,
};
