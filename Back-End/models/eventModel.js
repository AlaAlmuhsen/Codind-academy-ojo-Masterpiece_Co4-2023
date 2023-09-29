const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const eventsSchema = new Schema(
   {
      eventTitle: {
         type: String,
         required: true,
      },
      eventOrganizer: {
         type: String,
         required: true,
      },
      numberOfTickets: {
         type: Number,
         required: true,
      },
      numberOfSoldTickets: {
         type: Number,
         default: 0,
      },
      arrayOfPeopleSold: {
         type: Array,
         default: [],
      },
      DateOfEvent: {
         type: String,
         required: true,
      },
      timeOfEvent: {
         type: String,
         required: true,
      },
      location: {
         type: String,
         required: true,
      },
      price: {
         type: Number,
         required: true,
      },
      eventBackgroundimage: {
         type: String,
         required: true,
      },
      aboutEvent: {
         type: String,
         required: true,
      },
   },
   { timestamps: true }
);

module.exports = mongoose.model("Event", eventsSchema);
