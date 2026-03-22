import React from "react";
import user from "../../data/users";


const Cards = (props) => {
  return (
    <div className="w-[9%] h-[50%] overflow-hidden cursor-pointer p-2 rounded-xl">
      <img className="w-full h-full object-cover" src={props.user.image} alt="" />
    </div>
  );
};

export default Cards;