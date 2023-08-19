const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;

const userSchema = new Schema(
   {
      username: {
         type: String,
         required: true,
      },
      email: {
         type: String,
         required: true,
         unique: true,
      },
      password: {
         type: String,
         required: true,
      },
      role: {
         type: String,
         required: true,
      },
   },
   { timestamps: true }
);

// signup
userSchema.statics.signup = async function (username, email, password, role) {
   if (!username || !email || !password || !role) {
      throw Error("All Fields must be filled");
   }

   if (!validator.isEmail(email)) {
      throw Error("Please Enter a valid email");
   }

   if (!validator.isStrongPassword(password)) {
      throw Error("Password is not strong enough ");
   }

   const exists = await this.findOne({ email });

   if (exists) {
      throw Error("Email Already in use");
   }

   const salt = await bcrypt.genSalt(10);
   const hash = await bcrypt.hash(password, salt);

   const user = this.create({ username, email, password: hash, role });

   return user;
};

// login
userSchema.statics.login = async function (email, password) {
   if (!email || !password) {
      throw Error("All Fields must be filled");
   }

   const user = await this.findOne({ email });

   if (!user) {
      throw Error("Incorrect Email");
   }

   const match = await bcrypt.compare(password, user.password);

   if (!match) {
      throw Error("Incorrect password");
   }

   return user;
};

module.exports = mongoose.model("User", userSchema);
