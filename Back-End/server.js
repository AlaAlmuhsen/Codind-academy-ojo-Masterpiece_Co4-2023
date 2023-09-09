require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/user");
const eventsRoutes = require("./routes/event");
const morgan = require("morgan");

const app = express();

//middleware
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use("/api/user", userRoutes);
app.use("/api/events", eventsRoutes);

// connect to db
mongoose.connect(process.env.MONGO_URL).then(() => {
   //listen for request
   app.listen(process.env.PORT, () => {
      console.log("Listen to port 8080 & connected to db");
   });
});
