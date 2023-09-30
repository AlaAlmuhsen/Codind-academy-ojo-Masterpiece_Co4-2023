const mongoose = require("mongoose");
const Ticket = require("../models/ticketModel");
const Event = require("../models/eventModel");

// Get All Tickets
const getTickets = async (req, res) => {
   const tickets = await Ticket.find({}).sort({ createdAt: -1 });

   res.status(200).json(tickets);
};

// Get All Tickets For One User
const getTicketsForUser = async (req, res) => {
   const { _id } = req.user;
   const tickets = await Ticket.find({ userId: _id }).sort({ createdAt: -1 });

   res.status(200).json(tickets);
};

// Get a Single Ticket
const getTicket = async (req, res) => {
   const { id } = req.params;

   if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "No Such Ticket" });
   }

   const ticket = await Event.findById(id);

   if (!ticket) {
      return res.status(404).json({ error: "No Such Ticket" });
   }

   res.status(200).json(ticket);
};

// create new ticket
const createTicket = async (req, res) => {
   const { eventId } = req.body;

   let emptyFields = [];

   if (!eventId) {
      emptyFields.push("eventId");
   }

   if (emptyFields.length > 0) {
      return res
         .status(400)
         .json({ error: "Please fill in all the fields", emptyFields });
   }
   const {
      numberOfSoldTickets,
      eventTitle,
      DateOfEvent,
      timeOfEvent,
      eventBackgroundimage,
   } = await Event.findById(eventId);
   userId = req.user._id.toString();

   try {
      const ticket = await Ticket.create({
         eventId,
         userId,
         ticketNumber: numberOfSoldTickets + 1,
         eventTitle,
         DateOfEvent,
         timeOfEvent,
         eventBackgroundimage,
      });

      const allTicketSold = await Ticket.find({ eventId }).select("userId");

      const event = await Event.findOneAndUpdate(
         { _id: eventId },
         {
            numberOfSoldTickets: numberOfSoldTickets + 1,
            arrayOfPeopleSold: allTicketSold,
         }
      );

      res.status(200).json(ticket);
   } catch (error) {
      res.status(400).json({ error: error.message });
   }
};

// // delete a event
// const deleteEvent = async (req, res) => {
//    const { id } = req.params;

//    if (!mongoose.Types.ObjectId.isValid(id)) {
//       return res.status(404).json({ error: "No such event" });
//    }

//    const event = await Event.findOneAndDelete({ _id: id });

//    if (!event) {
//       return res.status(400).json({ error: "No such event" });
//    }

//    res.status(200).json(event);
// };

// // update a event
// const updateEvent = async (req, res) => {
//    const { id } = req.params;

//    if (!mongoose.Types.ObjectId.isValid(id)) {
//       return res.status(404).json({ error: "No such event" });
//    }

//    const event = await Event.findOneAndUpdate(
//       { _id: id },
//       {
//          ...req.body,
//       }
//    );

//    if (!event) {
//       return res.status(400).json({ error: "No such event" });
//    }

//    res.status(200).json(event);
// };

module.exports = {
   getTickets,
   getTicketsForUser,
   getTicket,
   createTicket,
   // deleteTicket,
   // updateTicket,
};
