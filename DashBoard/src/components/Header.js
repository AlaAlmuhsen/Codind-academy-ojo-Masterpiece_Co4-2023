import React, { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";

export default function Header() {
   const { user } = useAuthContext();
   const [hideBox, setHideBox] = useState(false);
   const { logout } = useLogout();
   return (
      <header>
         <i className="fa-solid fa-bars"></i>
         <div className="admin-info" onClick={() => setHideBox(!hideBox)}>
            <img src="https://placehold.co/50x50" alt="" />
            <div className="text">
               <p>{user.email}</p>
               <p>
                  {user.role}
                  <i
                     className={`fa-solid fa-caret-down ${
                        hideBox ? "rotate" : ""
                     }`}
                  ></i>
               </p>
            </div>
            {hideBox && (
               <div className="settings-box">
                  <ul>
                     <li>Profile</li>
                     <li>Settings</li>
                     <li className="danger" onClick={() => logout()}>
                        logout
                     </li>
                  </ul>
               </div>
            )}
         </div>
      </header>
   );
}
