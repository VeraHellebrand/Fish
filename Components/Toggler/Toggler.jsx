import React from "react";
import "./Toggler.css"

const Toggler = ({ active, onChoose }) => {

   const handleClick = (e) => {onChoose(e.target.name)};
   return (
      <div>
         <button
            className={`toggler-btn ${active === 1 ? "active" : ""}`}
            onClick={handleClick}
            name="list-of-fish"
         >
            Seznam rybiček
         </button>
         <button
            className={`toggler-btn ${active === 2 ? "active" : ""}`}
            onClick={handleClick}
            name="aquarium-form"
         >
            Vhodné aquarium
         </button>
      </div>
   );
};

export default Toggler;
