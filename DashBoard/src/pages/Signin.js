import React, { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import { Link } from "react-router-dom";

const Signin = () => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const { login, isLoading, error } = useLogin();

   const handleSubmit = async (e) => {
      e.preventDefault();

      await login(email, password);
   };
   return (
      <div className="form-container">
         <form onSubmit={handleSubmit}>
            <h3>Signin</h3>

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

            <div className="error-container">
               {error && <div className="error">{error}</div>}
            </div>
            <button disabled={isLoading}>Login</button>
            <p>
               you don't have an account ? <Link to="/signup">Signup</Link>
            </p>
         </form>
      </div>
   );
};

export default Signin;
