import { TicketContext } from "../context/TicketContext";
import { useContext } from "react";

export const useTicketContext = () => {
   const context = useContext(TicketContext);

   if (!context) {
      throw Error(
         "useTicketContext must be used inside an TicketContextProvider"
      );
   }

   return context;
};
