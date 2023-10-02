import React, { useState } from "react";
import Aside from "../components/Aside";
import Header from "../components/Header";
import { useAuthContext } from "../hooks/useAuthContext";
import { useEventContext } from "../hooks/useEventContext";

const AddEvent = () => {
   const { user } = useAuthContext();
   const { dispatch } = useEventContext();

   const [eventTitle, setEventTitle] = useState("");
   const [eventOrganizer, setEventOrganizer] = useState("");
   const [numberOfTickets, setNumberOfTickets] = useState("");
   const [DateOfEventForm, setDateOfEventForm] = useState("");
   const [timeOfEvent, setTimeOfEvent] = useState("");
   const [location, setlocation] = useState("");
   const [price, setPrice] = useState("");
   const [eventBackgroundimage, setEventBackgroundimage] = useState("");
   const [aboutEvent, setAboutEvent] = useState("");

   const [error, setError] = useState(null);
   const [emptyFields, setEmptyFields] = useState([]);

   const handleSubmit = async (e) => {
      e.preventDefault();

      if (!user) {
         setError("you must be logged in");
         return;
      }

      let DateOfEvent = formatDate(DateOfEventForm);

      const event = {
         eventTitle,
         eventOrganizer,
         numberOfTickets,
         DateOfEvent,
         timeOfEvent,
         location,
         price,
         eventBackgroundimage,
         aboutEvent,
      };

      const response = await fetch("/api/events", {
         method: "POST",
         body: JSON.stringify(event),
         headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
         },
      });

      const json = await response.json();

      if (!response.ok) {
         setError(json.error);
         setEmptyFields(json.emptyFields);
      }
      if (response.ok) {
         setEventTitle("");
         setEventOrganizer("");
         setNumberOfTickets("");
         setDateOfEventForm("");
         setTimeOfEvent("");
         setlocation("");
         setPrice("");
         setEventBackgroundimage("");
         setAboutEvent("");

         setError(null);
         setEmptyFields([]);
         console.log("new event added", json);
         dispatch({ type: "CREATE_EVENT", payload: json });
      }
   };

   function formatDate(inputDate) {
      const months = [
         "Jan",
         "Feb",
         "Mar",
         "Apr",
         "May",
         "Jun",
         "Jul",
         "Aug",
         "Sep",
         "Oct",
         "Nov",
         "Dec",
      ];

      let parts = inputDate.split("-");
      let year = parts[0];
      let month = months[parseInt(parts[1]) - 1];
      let day = parseInt(parts[2]);

      return `${day} ${month} ${year}`;
   }

   return (
      <div className="dashboard">
         <Aside />
         <div className="content">
            <Header />
            <main>
               <p>Dashboard &gt; Add Event</p>
               <h2>Add Event </h2>
               <form
                  className="event-form"
                  style={{
                     padding: 30,
                  }}
                  onSubmit={handleSubmit}
               >
                  <div className="row">
                     <div className="col-4">
                        <label>
                           EventTitle
                           <br />
                        </label>
                        <input
                           type="text"
                           onChange={(e) => setEventTitle(e.target.value)}
                           value={eventTitle}
                        />
                     </div>
                     <div className="col-4">
                        <label>
                           Event Organizer
                           <br />
                        </label>
                        <input
                           type="text"
                           onChange={(e) => setEventOrganizer(e.target.value)}
                           value={eventOrganizer}
                        />
                     </div>
                     <div className="col-4">
                        <label>
                           Number Of Tickets
                           <br />
                        </label>
                        <input
                           type="number"
                           onChange={(e) => setNumberOfTickets(e.target.value)}
                           value={numberOfTickets}
                        />
                     </div>
                  </div>
                  <div className="row">
                     <div className="col-4">
                        <label>
                           DateOfEvent
                           <br />
                        </label>
                        <input
                           type="date"
                           onChange={(e) => setDateOfEventForm(e.target.value)}
                           value={DateOfEventForm}
                        />
                     </div>
                     <div className="col-4">
                        <label>
                           timeOfEvent
                           <br />
                        </label>
                        <input
                           type="time"
                           onChange={(e) => setTimeOfEvent(e.target.value)}
                           value={timeOfEvent}
                        />
                     </div>
                     <div className="col-4">
                        <label>
                           location
                           <br />
                        </label>
                        <input
                           type="text"
                           onChange={(e) => setlocation(e.target.value)}
                           value={location}
                        />
                     </div>
                  </div>
                  <div className="row">
                     <div className="col-4">
                        <label>
                           price
                           <br />
                        </label>
                        <input
                           type="number"
                           onChange={(e) => setPrice(e.target.value)}
                           value={price}
                        />
                     </div>
                     <div className="col-4">
                        <label>
                           Event Image
                           <br />
                        </label>
                        <input
                           type="url"
                           onChange={(e) =>
                              setEventBackgroundimage(e.target.value)
                           }
                           value={eventBackgroundimage}
                        />
                     </div>
                     <div className="col-4">
                        <label>
                           About Event
                           <br />
                        </label>
                        <input
                           type="text"
                           onChange={(e) => setAboutEvent(e.target.value)}
                           value={aboutEvent}
                        />
                     </div>
                  </div>
                  <div
                     className="justify-content-end d-flex"
                     style={{ textAlign: "end" }}
                  >
                     <input
                        type="submit"
                        value="Add Event"
                        className="submit"
                     />
                  </div>
               </form>
            </main>
         </div>
      </div>
   );
};

export default AddEvent;

/*




eventBackgroundimage
"https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?aut…"
aboutEvent
"Lorem Lorem"
createdAt
2023-09-30T17:18:52.406+00:00
updatedAt
2023-10-01T23:57:30.909+00:00
__v
0
 */
