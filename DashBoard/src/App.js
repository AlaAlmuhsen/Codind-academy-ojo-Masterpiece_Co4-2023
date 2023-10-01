import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

// pages & components
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Signin from "./pages/Signin";
import AddAdmin from "./pages/AddAdmin";

const App = () => {
   const { user } = useAuthContext();

   return (
      <div className="app">
         <BrowserRouter>
            <Routes>
               <Route
                  path="/"
                  element={
                     user && user.role === "user" ? (
                        <Home />
                     ) : (
                        <Navigate to="/signin" />
                     )
                  }
               />
               <Route
                  path="/signin"
                  element={
                     !user ? (
                        <Signin />
                     ) : user.role === "user" ? (
                        <Navigate to="/" />
                     ) : (
                        <Navigate to="/dashboard" />
                     )
                  }
               />

               <Route
                  path="/signup"
                  element={
                     !user ? (
                        <Signup />
                     ) : user.role === "user" ? (
                        <Navigate to="/" />
                     ) : (
                        <Navigate to="/dashboard" />
                     )
                  }
               />

               <Route
                  path="/dashboard"
                  element={
                     user && user.role !== "user" ? (
                        <Dashboard />
                     ) : (
                        <Navigate to="/signin" />
                     )
                  }
               />
               <Route
                  path="/add-admin"
                  element={
                     user && user.role !== "user" ? (
                        <AddAdmin />
                     ) : (
                        <Navigate to="/signin" />
                     )
                  }
               />
            </Routes>
         </BrowserRouter>
      </div>
   );
};

export default App;
