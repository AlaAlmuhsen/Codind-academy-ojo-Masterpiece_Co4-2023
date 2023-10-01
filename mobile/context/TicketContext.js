import { createContext, useReducer, useEffect } from "react";

export const TicketContext = createContext();

export const ticketReducer = (state, action) => {
   switch (action.type) {
      case "SET_TICKETS":
         return { ticket: action.payload };
      case "ADD_TICKET":
         return {
            ticket: [action.payload, ...state.ticket],
         };
      default:
         return state;
   }
};

export const TicketContextProvider = ({ children }) => {
   const [state, dispatch2] = useReducer(ticketReducer, {
      ticket: null,
   });

   console.log("Ticket Context state", state);

   return (
      <TicketContext.Provider value={{ ...state, dispatch2 }}>
         {children}
      </TicketContext.Provider>
   );
};
