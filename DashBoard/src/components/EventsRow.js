import React from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { useEventContext } from "../hooks/useEventContext";

const EventsRow = ({ event }) => {
   const { dispatch } = useEventContext();
   const { user } = useAuthContext();
   const handleClick = async () => {
      if (!user) {
         return;
      }
      const response = await fetch("/api/events/" + event._id, {
         method: "DELETE",
         headers: {
            Authorization: `Bearer ${user.token}`,
         },
      });
      const json = await response.json();

      if (response.ok) {
         dispatch({ type: "DELETE_EVENT", payload: json });
      }
   };
   return (
      <tr>
         <td style={{ fontWeight: "600" }}>{event.eventTitle}</td>
         <td>{event.eventOrganizer}</td>
         <td>{event.DateOfEvent}</td>
         <td>{event.timeOfEvent}</td>
         <td>{event.numberOfTickets}</td>
         <td>{event.numberOfSoldTickets}</td>
         <td>{event.price}$</td>
         <td style={{ color: "green", fontWeight: "bold" }}>
            {event.numberOfSoldTickets * event.price}$
         </td>
         <td onClick={handleClick}>Delete Event</td>
      </tr>
   );
};

export default EventsRow;
