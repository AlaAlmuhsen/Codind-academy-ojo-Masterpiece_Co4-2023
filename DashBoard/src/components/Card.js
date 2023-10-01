import React from "react";

const Card = (props) => {
   return (
      <div className="col box" style={props.bstyle}>
         <div className="text">
            <p style={props.pstyle}>{props.title}</p>
            <p>{props.value}</p>
         </div>
         <i class={props.icon}></i>
      </div>
   );
};

export default Card;
