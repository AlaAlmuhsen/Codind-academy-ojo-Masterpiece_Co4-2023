import React from "react";
import { Link } from "react-router-dom";
import AsideList from "./AsideList";
import { useLogout } from "../hooks/useLogout";

const Aside = () => {
   const { logout } = useLogout();
   return (
      <aside>
         <div className="logo">Dashboard </div>
         <div className="aside-nav">
            <ul>
               <Link to={"/dashboard"}>
                  <li>Dashboard</li>
               </Link>
               <AsideList title={"Forms"}>
                  <ul className="sub-ul">
                     <Link to={"/add-admin"}>
                        <li>add admin</li>
                     </Link>
                     <Link to={"/add-admin"}>
                        <li>events </li>
                     </Link>
                  </ul>
               </AsideList>
            </ul>
         </div>
      </aside>
   );
};

export default Aside;
