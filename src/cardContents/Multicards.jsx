import React, { useState } from "react";
import { RiTimerLine, RiSubtractLine, RiAddLine } from "@remixicon/react";

const Multicards = (props) => {
  const [count, setCount] = useState(0);

  let handleAdd = () => {
    const newCount = count + 1;
    setCount(newCount);
    props.setItems(props.items + 1);
    props.setPrice(Number(props.price) + Number(props.details.price));
    
    if (typeof props.onCountChange === "function") {
      props.onCountChange(newCount);
    }
  };

  let handleSubtract = () => {
    const newCount = count - 1;
    setCount(newCount);
    props.setItems(props.items - 1);
    props.setPrice(Number(props.price) - Number(props.details.price));
    
    if (typeof props.onCountChange === "function") {
      props.onCountChange(newCount);
    }
  };

  return (
    <div className="w-full h-[280px] sm:h-[320px] md:h-[360px] bg-white shadow-md hover:shadow-xl flex flex-col justify-between pb-3 border border-gray-100 rounded-2xl overflow-hidden transition-all duration-300">
      
      <div className="w-full h-[45%] p-4 sm:p-6 bg-gray-50 flex items-center justify-center overflow-hidden">
        <img
          className="w-full h-full object-contain hover:scale-110 transition-transform duration-300"
          src={props.details.img}
          alt={props.details.title}
        />
      </div>

      <h3 className="text-blue-700 text-[11px] sm:text-xs flex items-center gap-1 font-extrabold px-3 mt-1 select-none">
        <RiTimerLine className="w-3.5 h-3.5" />
        <span>{props.details.time}</span>
      </h3>

      <div className="px-3 flex-1 flex flex-col justify-start mt-1">
        <h1 className="font-bold text-xs sm:text-sm md:text-base text-gray-800 line-clamp-2 leading-tight">
          {props.details.title}
        </h1>
        <h2 className="text-[10px] sm:text-xs text-gray-400 mt-0.5 font-medium">
          {props.details.quantity}
        </h2>
      </div>
      
      <div className="w-full flex items-center justify-between px-3 mt-2">
        <h2 className="font-black text-sm sm:text-base text-gray-900">
          ₹{props.details.price}
        </h2>
        
        {count > 0 ? (
          <div className="inline-flex items-center gap-2 px-2 py-1 sm:px-3 sm:py-1.5 text-xs font-black rounded-lg bg-blue-600 text-white select-none shadow-sm shadow-blue-200">
            <RiSubtractLine
              onClick={handleSubtract}
              className="w-4 h-4 cursor-pointer hover:scale-120 active:scale-90 transition-transform"
            />
            <span className="w-4 text-center text-xs md:text-sm">{count}</span>
            <RiAddLine 
              onClick={handleAdd} 
              className="w-4 h-4 cursor-pointer hover:scale-120 active:scale-90 transition-transform" 
            />
          </div>
        ) : (
          <button
            onClick={handleAdd}
            className="w-16 h-8 sm:w-20 bg-blue-50 border border-blue-600 text-xs sm:text-sm rounded-lg font-black text-blue-600 cursor-pointer hover:bg-blue-600 hover:text-white active:scale-95 transition-all"
          >
            ADD
          </button>
        )}
      </div>

    </div>
  );
};

export default Multicards;