require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/user");
const eventsRoutes = require("./routes/event");
const ticketRoutes = require("./routes/ticket");
const morgan = require("morgan");

const app = express();

//middleware
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use("/api/user", userRoutes);
app.use("/api/events", eventsRoutes);
app.use("/api/ticket", ticketRoutes);

// connect to db
mongoose.connect(process.env.MONGO_URL).then(() => {
   //listen for request
   app.listen(process.env.PORT, () => {
      console.log("Listen to port 8080 & connected to db");
   });
});
