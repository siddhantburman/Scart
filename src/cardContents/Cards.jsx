import React from "react";
import user from "../../data/users";

const Cards = (props) => {
  return (

    <div className="w-20 sm:w-24 md:w-28 aspect-square overflow-hidden cursor-pointer p-1.5 md:p-2 bg-white rounded-full md:rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:scale-105 active:scale-95 transition-all flex items-center justify-center">
      <img 
        className="w-full h-full object-contain rounded-full md:rounded-xl" 
        src={props.user.image} 
        alt={props.user.name || "category"} 
      />
    </div>
  );
};

export default Cards;