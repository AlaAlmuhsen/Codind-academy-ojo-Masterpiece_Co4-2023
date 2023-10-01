import React, { useState } from "react";

const AsideList = ({ children, title, setCurrentPage }) => {
   const [hide, setHide] = useState(false);
   return (
      <li onClick={() => setHide(!hide)}>
         {title}
         <i className="fa-solid fa-sort-down"></i>
         {hide && children}
      </li>
   );
};

export default AsideList;
