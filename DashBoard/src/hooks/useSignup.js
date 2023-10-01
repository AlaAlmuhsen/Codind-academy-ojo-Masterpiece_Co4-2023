import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
   const [error, setError] = useState(null);
   const [isLoading, setIsLoading] = useState(null);
   const { dispatch } = useAuthContext();

   const signup = async (username, email, password, confirmpassword, role) => {
      setIsLoading(true);
      setError(null);

      if (password !== confirmpassword) {
         setError("password not match");
         setIsLoading(false);
         return;
      }
      const responce = await fetch(
         "https://ticketmaster-bsc1.onrender.com/api/user/signup",
         {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, email, password, role }),
         }
      );
      const json = await responce.json();

      if (!responce.ok) {
         setIsLoading(false);
         setError(json.error);
      }

      if (responce.ok) {
         // save the user on local storage
         localStorage.setItem("user", JSON.stringify);

         // update the auth context
         dispatch({ type: "LOGIN", payload: json });

         setIsLoading(false);
         setError(null);
      }
   };
   return { signup, isLoading, error };
};
