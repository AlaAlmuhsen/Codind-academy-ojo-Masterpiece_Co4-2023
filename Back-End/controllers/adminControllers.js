const mongoose = require("mongoose");
const Event = require("../models/eventModel");
const Ticket = require("../models/ticketModel");
const User = require("../models/userModel");

// Get All Events
const getAdminData = async (req, res) => {
   const returnData = {};

   const numberOfusers = (await User.find({})).length;
   returnData["numberOfusers"] = numberOfusers;

   const events = await Event.find({});
   returnData["numberOfevents"] = events.length;

   const Ticket = await Event.find({});
   returnData["numberOfTicketSold"] = Ticket.length;

   let revinew = 0;

   events.forEach((event) => {
      revinew += event.numberOfSoldTickets * event.price;
   });

   returnData["revinew"] = revinew;

   res.status(200).json(returnData);
};

module.exports = {
   getAdminData,
};
