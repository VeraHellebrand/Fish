import React from "react";
import "./FishForm.css";

const FishForm = ({ data, handleChange, handleAdd }) => {
   return (
      <div className="fish-form">
         <input
            type="text"
            placeholder="jméno rybičky"
            name="name"
            value={data.name}
            onChange={handleChange}
         />
         <fieldset>
            <legend>Druh rybičky</legend>
            <label htmlFor="small">malá</label>
            <input
               type="radio"
               name="type"
               id="small"
               value="malá"
               checked={data.type === "malá"}
               onChange={handleChange}
            />
            <label htmlFor="big">velká</label>
            <input
               type="radio"
               name="type"
               id="big"
               value="velká"
               checked={data.type === "velká"}
               onChange={handleChange}
               
            />
         </fieldset>

         <button type="button" className="list-btn" onClick={handleAdd}>
            Přidat
         </button>
      </div>
   );
};

export default FishForm;
