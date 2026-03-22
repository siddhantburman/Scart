import react, {useState } from 'react'
import React from "react";
import Heading from "../../data/Heading";
import Multicard from "../../data/Heading";
import { RiTimerLine, RiSubtractLine, RiAddLine } from "@remixicon/react";

const Multicards = (props) => {
  const [count, setCount] = useState(0);

  let handleAdd = () => {
    setCount(count + 1);
  };

  return (
    <div className="w-[9%] h-[100%] shadow-xl shadow-black-900 flex flex-col border-none  justify-between pb-2 border border-black rounded-md overflow-hidden">
      <div className="w-full h-[50%] p-7">
        <img
          className="w-full h-full hover:scale-[0.8] transition-[0.7s] object-cover"
          src={props.details.img}
          alt=""
        />
      </div>
      <h3 className="text-blue-700 text-[13px] flex items-center gap-1 font-bold pl-4">
        <RiTimerLine/>
        {props.details.time}
      </h3>
      <h1 className="font-bold pl-4">{props.details.title}</h1>
      <h2 className="text-gray-800 pl-4">{props.details.quantity}</h2>
      <div className="w-full flex items-center justify-between pr-3 pl-4">
        <h2 className="font-semibold">₹{props.details.price}/-</h2>
        {count>0 ?  <button className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-bold border cursor-pointer border-white rounded-lg bg-blue-500 text-white transition-colors cursor-pointer">
          {" "}
          <RiSubtractLine
            onClick={() => {
              setCount(count - 1);
            }}
            className="text-sm"
          />
          {count}
          <RiAddLine onClick={handleAdd} className="text-sm" />
        </button> :  <button onClick={handleAdd} className="w-[80px] h-[32px] bg-blue-200 border border-blue-500 text-[17px] rounded-md">
          ADD
        </button>}
      </div>
    </div>
  );
};

export default Multicards;
