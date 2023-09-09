import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { useNavigation } from "@react-navigation/native";

export const useSignup = () => {
   const [error, setError] = useState(null);
   const [isLoading, setIsLoading] = useState(null);
   const { dispatch } = useAuthContext();
   const navigation = useNavigation();

   const signup = async (username, email, password) => {
      setIsLoading(true);
      setError(null);

      const responce = await fetch(
         "https://ticketmaster-bsc1.onrender.com/api/user/signup",
         {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, email, password, role: "user" }),
         }
      );

      const json = await responce.json();

      if (!responce.ok) {
         setIsLoading(false);
         setError(json.error);
      }

      if (responce.ok) {
         // save the user to local storage
         // localStorage.setItem("user", JSON.stringify(json));

         // update the auth context
         dispatch({ type: "SIGNIN", payload: json });

         setIsLoading(false);
         setError(null);
         navigation.navigate("DrawerGroup");
      }
   };

   return { signup, isLoading, error };
};
