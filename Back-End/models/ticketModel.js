const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ticketSchema = new Schema(
   {
      eventId: {
         type: String,
         required: true,
      },
      userId: {
         type: String,
         required: true,
      },
      ticketNumber: {
         type: Number,
         required: true,
      },
      eventTitle: {
         type: String,
         required: true,
      },
      DateOfEvent: {
         type: String,
         required: true,
      },
      timeOfEvent: {
         type: String,
         required: true,
      },
      eventBackgroundimage: {
         type: String,
         required: true,
      },
   },
   { timestamps: true }
);

module.exports = mongoose.model("Ticket", ticketSchema);
