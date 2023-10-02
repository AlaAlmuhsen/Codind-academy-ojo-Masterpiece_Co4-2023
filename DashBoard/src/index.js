import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";
import { EventsContext, EventsContextProvider } from "./context/EventsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <React.StrictMode>
      <AuthContextProvider>
         <EventsContextProvider>
            <App />
         </EventsContextProvider>
      </AuthContextProvider>
   </React.StrictMode>
);
