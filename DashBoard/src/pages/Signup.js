import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSignup } from "../hooks/useSignup";

const Signup = () => {
   const [username, setUsername] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [confirmpassword, setConfirmpassword] = useState("");
   const rule = "user";
   let { signup, isLoading, error } = useSignup();

   const handleSubmit = async (e) => {
      e.preventDefault();
      await signup(username, email, password, confirmpassword, rule);
      console.log(error);
   };
   return (
      <div className="form-container">
         <form onSubmit={handleSubmit} autoComplete="off">
            <h3>Signup</h3>

            <label>Username</label>
            <input
               type="text"
               value={username}
               onChange={(e) => setUsername(e.target.value)}
               required
               placeholder="Username"
            />
            <label>Email:</label>
            <input
               type="email"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               required
               placeholder="Email"
            />

            <label>Password:</label>
            <input
               type="password"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
               required
               placeholder="Password"
            />
            <label>Confirm Password:</label>
            <input
               type="password"
               value={confirmpassword}
               onChange={(e) => setConfirmpassword(e.target.value)}
               required
               placeholder="Password"
            />
            <div className="error-container">
               {error && <div className="error">{error}</div>}
            </div>
            <button disabled={isLoading}>Signup</button>
            <p>
               you have an account ? <Link to="/signin">Signin</Link>
            </p>
         </form>
      </div>
   );
};

export default Signup;
