import React from "react";
import "./FishList.css";

const FishList = ({ data, handleDelete }) => {
   return (
      <div className="list">
         {data.map((item) => {
            return (
               <div className="item" key={item.id}>
                  <span>
                     {item.name} / {item.type}
                  </span>
                  <button
                     className="btn-delete"
                     onClick={() => handleDelete(item.id)}
                  >
                     X
                  </button>
               </div>
            );
         })}
      </div>
   );
};

export default FishList;
