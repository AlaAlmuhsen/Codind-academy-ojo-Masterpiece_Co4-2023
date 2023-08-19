const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const createToken = (_id, role) => {
   return jwt.sign({ _id, role }, process.env.SECRET, { expiresIn: "1d" });
};

// login
const login = async (req, res) => {
   const { email, password } = req.body;
   try {
      const user = await User.login(email, password);

      //create a Token
      const token = createToken(user._id, user.role);

      res.status(200).json({ email, token, role: user.role });
   } catch (error) {
      res.status(400).json({ error: error.message });
   }
};

// signup
const signup = async (req, res) => {
   const { username, email, password, role } = req.body;

   try {
      const user = await User.signup(username, email, password, role);

      //create a Token
      const token = createToken(user._id, user.role);

      res.status(200).json({ email, token, role });
   } catch (error) {
      res.status(400).json({ error: error.message });
   }
};

module.exports = {
   login,
   signup,
};
