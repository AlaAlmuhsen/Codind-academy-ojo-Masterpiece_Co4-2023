import React from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import Aside from "../components/Aside";
import Header from "../components/Header";
import Card from "../components/Card";

const Dashboard = () => {
   const { user } = useAuthContext();

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
                     value="10"
                     pstyle={{ color: "#4e73df" }}
                     bstyle={{ borderColor: "#4e73df" }}
                     icon="fa-solid fa-users"
                  />
                  <Card
                     title="Active Events"
                     value="100"
                     pstyle={{ color: "#1cc88a" }}
                     bstyle={{ borderColor: "#1cc88a" }}
                     icon="fa-solid fa-ticket"
                  />
                  <Card
                     title="Event Planners"
                     value="10"
                     pstyle={{ color: "#36b9cc" }}
                     bstyle={{ borderColor: "#36b9cc" }}
                     icon="fa-solid fa-clipboard-list"
                  />
                  <Card
                     title="Revinew"
                     value="10$"
                     pstyle={{ color: "#f6c23e" }}
                     bstyle={{ borderColor: "#f6c23e" }}
                     icon="fa-solid fa-dollar-sign"
                  />
               </div>
            </main>
         </div>
      </div>
   );
};

export default Dashboard;
