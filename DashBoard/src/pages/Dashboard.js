import React, { useEffect, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import Aside from "../components/Aside";
import Header from "../components/Header";
import Card from "../components/Card";
import EventsTable from "../components/EventsTable";
import { useEventContext } from "../hooks/useEventContext";

const Dashboard = () => {
   const { user } = useAuthContext();
   const { events, dispatch } = useEventContext();

   const [adminData, setAdminData] = useState([]);
   useEffect(() => {
      const fetchEvents = async () => {
         const response = await fetch("api/events", {
            headers: {
               Authorization: `Bearer ${user.token}`,
            },
         });

         const json = await response.json();

         if (response.ok) {
            dispatch({ type: "SET_EVENTS", payload: json });
         }
      };

      const fetchAdminData = async () => {
         const response = await fetch("api/admin", {
            headers: {
               Authorization: `Bearer ${user.token}`,
            },
         });

         const json = await response.json();

         setAdminData(json);
      };

      if (user) {
         fetchEvents();
         fetchAdminData();
      }
   }, []);
   return (
      <div className="dashboard">
         <Aside />
         <div className="content">
            <Header />
            <main>
               <p>DashBoard &gt; Home</p>
               <div className="row gap-3">
                  <Card
                     title="Number Of Users"
                     value={adminData.numberOfusers}
                     pstyle={{ color: "#4e73df" }}
                     bstyle={{ borderColor: "#4e73df" }}
                     icon="fa-solid fa-users"
                  />
                  <Card
                     title="Active Events"
                     value={adminData.numberOfevents}
                     pstyle={{ color: "#1cc88a" }}
                     bstyle={{ borderColor: "#1cc88a" }}
                     icon="fa-solid fa-ticket"
                  />
                  <Card
                     title="Total Number Of Ticket Sold"
                     value={adminData.numberOfTicketSold}
                     pstyle={{ color: "#36b9cc" }}
                     bstyle={{ borderColor: "#36b9cc" }}
                     icon="fa-solid fa-clipboard-list"
                  />
                  <Card
                     title="Revinew"
                     value={adminData.revinew}
                     pstyle={{ color: "#f6c23e" }}
                     bstyle={{ borderColor: "#f6c23e" }}
                     icon="fa-solid fa-dollar-sign"
                  />
               </div>
               <div>
                  <h3>Events Table</h3>
                  <EventsTable events={events}></EventsTable>
               </div>
            </main>
         </div>
      </div>
   );
};

export default Dashboard;
