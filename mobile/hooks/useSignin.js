import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { useNavigation } from "@react-navigation/native";

export const useSignin = () => {
   const [error, setError] = useState(null);
   const [isLoading, setIsLoading] = useState(null);
   const { dispatch } = useAuthContext();

   const navigation = useNavigation();

   const signin = async (email, password) => {
      setIsLoading(true);
      setError(null);

      const responce = await fetch(
         "https://ticketmaster-bsc1.onrender.com/api/user/login",
         {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
         }
      );

      const json = await responce.json();

      if (!responce.ok) {
         setIsLoading(false);
         setError(json.error);
      }

      if (responce.ok) {
         // update the auth context
         dispatch({ type: "SIGNIN", payload: json });

         setIsLoading(false);
         setError(null);
         navigation.navigate("DrawerGroup");
      }
   };

   return { signin, isLoading, error };
};
