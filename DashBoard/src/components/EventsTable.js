import React from "react";
import EventsRow from "./EventsRow";

const EventsTable = ({ events }) => {
   return (
      <table className="events_table">
         <tr>
            <th>Event Title</th>
            <th>Event Organizer</th>
            <th>Date Of Event</th>
            <th>Time Of Event</th>
            <th>Number Of Tickets</th>
            <th>NO Ticket Sold</th>
            <th>Ticket Price</th>
            <th>Revenue </th>
            <th>Delete Event</th>
         </tr>
         {events &&
            events.map((event) => <EventsRow event={event} key={event._id} />)}
      </table>
   );
};

export default EventsTable;
